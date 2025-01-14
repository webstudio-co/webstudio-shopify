import { initApollo } from './apollo'
import {
	ShopifyAddressType,
	ShopifyCustomerType,
	QueryResponseType,  
	QueryParamsType,
} from '../types'
import {	
	QUERY_PRODUCTS,
  QUERY_PRODUCT_BY_HANDLE,
	QUERY_PRODUCT_RECOMMENDATIONS,
	QUERY_PRODUCT_BY_ID,
	QUERY_COLLECTION_BY_HANDLE,
	QUERY_COLLECTIONS,
	CHECKOUT_FETCH,
	CHECKOUT_CREATE,
	CHECKOUT_LINE_ITEMS_ADD,
	CHECKOUT_LINE_ITEMS_REMOVE,
	CHECKOUT_LINE_ITEMS_UPDATE,
	CHECKOUT_DISCOUNT_CODE_APPLY,
	CHECKOUT_DISCOUNT_CODE_REMOVE,
	QUERY_CUSTOMER_ORDERS,
	QUERY_CUSTOMER,
	QUERY_CUSTOMER_ADDRESSES,
	MUTATION_CUSTOMER_CREATE,
	MUTATION_CUSTOMER_UPDATE,
	MUTATION_CUSTOMER_ADDRESS_CREATE,
	MUTATION_CUSTOMER_ADDRESS_UPDATE,
	MUTATION_CUSTOMER_ADDRESS_DELETE,
	MUTATION_ACCESS_TOKEN_CREATE,
	MUTATION_ACCESS_TOKEN_DELETE,
	MUTATION_ACCESS_TOKEN_RENEW,
	MUTATION_CUSTOMER_RECOVER,
	MUTATION_CUSTOMER_RESET_BY_URL,
	QUERY_SHOP,
	QUERY_ARTICLES,
	QUERY_ARTICLE_BY_HANDLE,
	QUERY_METAOBJECTS,
	QUERY_METAOBJECT_BY_HANDLE,
	QUERY_BLOGS,
	QUERY_BLOG_BY_HANDLE,
	QUERY_PAGES,
	QUERY_SEARCH,
	QUERY_PAGE_BY_HANDLE,
	QUERY_CART,
	CART_CREATE,
  CART_DISCOUNT_CODES_UPDATE,
	CART_LINES_ADD,
	CART_LINES_REMOVE,
	CART_LINES_UPDATE,
	CART_BUYER_IDENTITY_UPDATE,
	QUERY_MENU_BY_HANDLE,  
} from '../graphql'

export class ShopifyClient {
	private _accessToken?: string
	private _fetchAccessToken?: () => string
	private apollo: any

	constructor(
		domain: string,
		storefrontAccessToken: string,
		fetchAccessToken?: () => string,
		apiVersion: string = '2024-04'
	) {
		this._fetchAccessToken = fetchAccessToken
		this.apollo = initApollo(domain, storefrontAccessToken, apiVersion)
		this.init()
	}

	init(): ShopifyClient {
		return this
	}


	accessToken(token: string): ShopifyClient {
		this._accessToken = token
		return this
	}
	// Articles
	async findArticle(handle: string): Promise<QueryResponseType> {
		const response = await this.executeQuery(QUERY_ARTICLE_BY_HANDLE, {
			handle,
		})
		return {
			data: response?.data?.articleByHandle,
			error: response?.error,
		}
	}

	async findArticles(params: any): Promise<QueryResponseType> {
		const { first = 20, query } = params || {}
		const response = await this.executeQuery(QUERY_ARTICLES, {
			first: first,
			query: query,
		})
		return {
			meta: response?.data?.articles?.pageInfo,
			data: response?.data?.articles?.edges.map((e) => e.node),
			error: response?.error,
		}
	}

	// Blogs
	async findBlog(handle: string): Promise<QueryResponseType> {
		const response = await this.executeQuery(QUERY_BLOG_BY_HANDLE, { handle })
		let data = {
			...response?.data?.blogByHandle,
			articles: response?.data?.blogByHandle?.articles?.edges.map(
				(e) => e.node
			),
		}
		return {
			data: data,
			error: response?.error,
		}
	}

	async findBlogs(params: any): Promise<QueryResponseType> {
		const { first = 20, query } = params || {}
		const response = await this.executeQuery(QUERY_BLOGS, {
			first: first,
			query: query,
		})
		return {
			meta: response?.data?.blogs?.pageInfo,
			data: response?.data?.blogs?.edges.map((e) => e.node),
			error: response?.error,
		}
	}

	// Cart
	async findCart(id: string): Promise<QueryResponseType> {
		const response = await this.executeQuery(QUERY_CART, {
			id,
		})
		return {
			data: response?.data,
			error: response?.error,
		}
	}

	async cartCreate(): Promise<QueryResponseType> {
		const response = await this.executeMutation(CART_CREATE, {
			input: {},
		})
		return {
			data: response?.data?.cartCreate?.cart,
			error: response?.error,
		}
	}

  async cartDiscountCodesUpdate(cartId: string, discountCodes: string[]): Promise<QueryResponseType> {
    const response = await this.executeMutation(CART_DISCOUNT_CODES_UPDATE, {
      cartId,
      discountCodes,
    })
    return {
      data: response?.data?.cartDiscountCodesUpdate?.cart,
      error: response?.error,
    }
  }

	async cartLineAdd(cartId: string, line: any): Promise<QueryResponseType> {
		return await this.cartLinesAdd(cartId, [line])
	}

	async cartLinesAdd(cartId: string, lines: any): Promise<QueryResponseType> {
		const response = await this.executeMutation(CART_LINES_ADD, {
			cartId,
			lines,
		})
		return {
			data: response?.data?.cartLinesAdd?.cart,
			error: response?.error,
		}
	}

	async cartLineRemove(cartId: string, lineId: string): Promise<QueryResponseType> {
		return await this.cartLinesRemove(cartId, [lineId])
	}

	async cartLinesRemove(
		cartId: string,
		lineIds: string[]
	): Promise<QueryResponseType> {
		const response = await this.executeMutation(CART_LINES_REMOVE, {
			cartId,
			lineIds,
		})
		return {
			data: response?.data?.cartLinesRemove?.cart,
			error: response?.error,
		}
	}

	async cartLinesUpdate(cartId: string, lines: any): Promise<QueryResponseType> {
		const response = await this.executeMutation(CART_LINES_UPDATE, {
			cartId,
			lines,
		})
		return {
			data: response?.data?.cartLinesUpdate?.cart,
			error: response?.error,
		}
	}

	async cartBuyerIdentityUpdate(
		cartId: string,
		buyerIdentity: any
	): Promise<QueryResponseType> {
		const response = await this.executeMutation(CART_BUYER_IDENTITY_UPDATE, {
			cartId,
			buyerIdentity,
		})
		return {
			data: response?.data?.cartBuyerIdentityUpdate?.cart,
			error: response?.error,
		}
	}

	// Checkout
	async findCheckout(id: string): Promise<QueryResponseType> {
		const response = await this.executeQuery(CHECKOUT_FETCH, {
			id,
		})
		return {
			data: response?.data?.node,
			error: response?.error,
		}
	}

	async checkoutCreate(): Promise<QueryResponseType> {
		const response = await this.executeMutation(CHECKOUT_CREATE, {
			input: {},
		})
		return {
			data: response?.data?.checkoutCreate?.checkout,
			error: response?.error,
		}
	}

	async addCheckoutLineItem(
		checkoutId: string,
		lineItem: any
	): Promise<QueryResponseType> {
		return await this.addCheckoutLineItems(checkoutId, [lineItem])
	}

	async addCheckoutLineItems(
		checkoutId: string,
		lineItems: any
	): Promise<QueryResponseType> {
		const response = await this.executeMutation(CHECKOUT_LINE_ITEMS_ADD, {
			checkoutId,
			lineItems,
		})
		return {
			data: response?.data?.checkoutLineItemsAdd?.checkout,
			error: response?.error,
		}
	}

	async updateCheckoutLineItems(
		checkoutId: string,
		lineItems: any
	): Promise<QueryResponseType> {
		const response = await this.executeMutation(CHECKOUT_LINE_ITEMS_UPDATE, {
			checkoutId,
			lineItems,
		})
		return {
			data: response?.data?.checkoutLineItemsUpdate?.checkout,
			error: response?.error,
		}
	}

	async removeCheckoutLineItem(
		checkoutId: string,
		lineItemId: string
	): Promise<QueryResponseType> {
		return await this.removeCheckoutLineItems(checkoutId, [lineItemId])
	}

	async removeCheckoutLineItems(
		checkoutId: string,
		lineItemIds: string[]
	): Promise<QueryResponseType> {
		const response = await this.executeMutation(CHECKOUT_LINE_ITEMS_REMOVE, {
			checkoutId,
			lineItemIds,
		})
		return {
			data: response?.data?.checkoutLineItemsRemove?.checkout,
			error: response?.error,
		}
	}

	async applyCheckoutDiscountCode(
		checkoutId: string,
		discountCode: string
	): Promise<QueryResponseType> {
		const response = await this.executeMutation(CHECKOUT_DISCOUNT_CODE_APPLY, {
			checkoutId,
			discountCode,
		})
		return {
			data: response?.data?.checkoutDiscountCodeApply?.checkout,
			error: response?.error,
		}
	}

	async removeCheckoutDiscountCode(checkoutId: string): Promise<QueryResponseType> {
		const response = await this.executeMutation(CHECKOUT_DISCOUNT_CODE_REMOVE, {
			checkoutId,
		})
		return {
			data: response?.data?.checkoutDiscountCodeRemove?.checkout,
			error: response?.error,
		}
	}

	// Products
	async findProduct(handle: string): Promise<QueryResponseType> {
    const gql = QUERY_PRODUCT_BY_HANDLE
		const response = await this.executeQuery(gql, {
			handle      
		})
		return {
			data: response?.data?.productByHandle,
			error: response?.error,
		}
	}

	async findProductbyId(id: string): Promise<QueryResponseType> {
		const response = await this.executeQuery(QUERY_PRODUCT_BY_ID, { id })
		return {
			data: response?.data?.product,
			error: response?.error,
		}
	}

	async findProducts(params: QueryParamsType): Promise<QueryResponseType> {
		
    const { query, sortKey = 'RELEVANCE', first = 24, reverse, after } = params || {}

		const response = await this.executeQuery(QUERY_PRODUCTS, {
			query,
      first,
			sortKey,
			reverse,
			after,
		})
    
		return {
			meta: response?.data?.products?.pageInfo,
			data: response?.data?.products?.edges.map((e) => e.node),
			error: response?.error,
		}
	}

	async searchProducts(params: QueryParamsType): Promise<QueryResponseType> {
		
    const { 
      query, 
      first = 24, 
      after,
      filters, 
    } = params || {}

		const response = await this.executeQuery(QUERY_SEARCH, {
			query,
			first,
      after,
      productFilters: filters,
		})
    
		return {
			meta: response?.data?.search?.pageInfo,
			data: response?.data?.search?.edges.map((e) => e.node),
			error: response?.error,
		}
	}

	async findProductRecommendations(productId: string): Promise<QueryResponseType> {
		const response = await this.executeQuery(QUERY_PRODUCT_RECOMMENDATIONS, {
			productId,
		})
		return {
			data: response?.data?.productRecommendations,
			error: response?.error,
		}
	}

	// Collections
	async findCollection(handle: string, query: any): Promise<QueryResponseType> {
		const {
			first = 20,
			filters,
			reverse = false,
			sortKey = 'COLLECTION_DEFAULT',
			after,
		} = query || {}

		const response = await this.executeQuery(QUERY_COLLECTION_BY_HANDLE, {
			handle,
			first,
			filters,
			reverse,
			sortKey,
			after,
		})

		const data = {
			...response?.data?.collectionByHandle,
			products: response?.data?.collectionByHandle?.products?.edges.map(
				(e) => e.node
			),
		}
		return {
			data: data,
			error: response?.error,
		}
	}

	async findCollections(first?: number): Promise<QueryResponseType> {
		const response = await this.executeQuery(QUERY_COLLECTIONS, {
			first: first || 24,
		})
		return {
			meta: response?.data?.collections?.pageInfo,
			data: response?.data?.collections?.edges.map((e) => e.node),
			error: response?.error || response?.data?.collections?.userErrors,
		}
	}

	// Authentication
	async login(email: string, password: string): Promise<QueryResponseType> {
		const response = await this.executeMutation(MUTATION_ACCESS_TOKEN_CREATE, {
			input: { email, password },
		})
		return {
			data: response?.data?.customerAccessTokenCreate?.customerAccessToken,
			error:
				response?.error ||
				response?.data?.customerAccessTokenCreate?.customerUserErrors,
		}
	}

	async signup(customer: ShopifyCustomerType): Promise<QueryResponseType> {
		const response = await this.executeMutation(MUTATION_CUSTOMER_CREATE, {
			input: customer,
		})
		return {
			data: response?.data?.customerCreate?.customer,
			error:
				response?.error || response?.data?.customerCreate?.customerUserErrors,
		}
	}

	async forgotPassword(email: string): Promise<QueryResponseType> {
		const response = await this.executeMutation(MUTATION_CUSTOMER_RECOVER, {
			email,
		})
		return {
			data: response?.data?.customerRecover,
			error:
				response?.error || response?.data?.customerRecover?.customerUserErrors,
		}
	}

	async resetPassword(
		resetToken: string,
		password: string
	): Promise<QueryResponseType> {
		const response = await this.executeMutation(
			MUTATION_CUSTOMER_RESET_BY_URL,
			{
				resetToken,
				password,
			}
		)
		return {
			data: response?.data?.customerResetByUrl,
			error:
				response?.error ||
				response?.data?.customerResetByUrl?.customerUserErrors,
		}
	}

	async refreshCustomerAccessToken(): Promise<QueryResponseType> {
		const customerAccessToken = this._accessToken || this._fetchAccessToken()
		const response = await this.executeMutation(MUTATION_ACCESS_TOKEN_RENEW, {
			customerAccessToken,
		})
		return {
			data: response?.data?.customerAccessTokenRenew,
			error:
				response?.error || response?.data?.customerAccessTokenRenew?.userErrors,
		}
	}

	async logout(): Promise<QueryResponseType> {
		const customerAccessToken = this._accessToken || this._fetchAccessToken()
		const response = await this.executeMutation(MUTATION_ACCESS_TOKEN_DELETE, {
			customerAccessToken,
		})
		return {
			data: response?.data?.customerAccessTokenDelete,
			error:
				response?.data?.customerAccessTokenDelete?.userErrors ||
				response?.error,
		}
	}

	// Customers
	async findCustomer(): Promise<QueryResponseType> {
		const customerAccessToken = this._accessToken || this._fetchAccessToken()
		const response = await this.executeQuery(QUERY_CUSTOMER, {
			customerAccessToken,
		})
		return {
			data: response?.data?.customer,
			error: response?.data?.customerUserErrors || response?.error,
		}
	}

	async updateCustomer(customer: ShopifyCustomerType): Promise<QueryResponseType> {
		const customerAccessToken = this._accessToken || this._fetchAccessToken()
		const response = await this.executeMutation(MUTATION_CUSTOMER_UPDATE, {
			customerAccessToken,
			customer: customer,
		})
		return {
			data: response?.data?.customerUpdate?.customer,
			error:
				response?.data?.customerUpdate?.customerUserErrors || response?.error,
		}
	}

	async updateCustomerPassword({ password }): Promise<QueryResponseType> {
		const customerAccessToken = this._accessToken || this._fetchAccessToken()
		const response = await this.executeMutation(MUTATION_CUSTOMER_UPDATE, {
			customerAccessToken,
			customer: {
				password,
			},
		})
		return {
			data: response?.data?.customerUpdate?.customer,
			error:
				response?.error || response?.data?.customerUpdate?.customerUserErrors,
		}
	}

	// Customer Addresses
	async findCustomerAddresses(
		first: number = 20,
		cursor: string = null
	): Promise<QueryResponseType> {
		const customerAccessToken = this._accessToken || this._fetchAccessToken()
		const response = await this.executeQuery(QUERY_CUSTOMER_ADDRESSES, {
			customerAccessToken,
			first,
			cursor,
		})
		return {
			meta: response?.data?.customer?.addresses?.pageInfo,
			data: response?.data?.customer?.addresses?.edges.map((e) => e.node),
			error: response?.error,
		}
	}

	async updateCustomerAddress(address: ShopifyAddressType): Promise<QueryResponseType> {
		const customerAccessToken = this._accessToken || this._fetchAccessToken()
		const response = await this.executeMutation(
			MUTATION_CUSTOMER_ADDRESS_UPDATE,
			{
				customerAccessToken,
				id: address.id,
				address: {
					firstName: address?.firstName,
					lastName: address?.lastName,
					address1: address?.address1,
					address2: address?.address2,
					phone: address?.phone,
					city: address?.city,
					country: address?.country,
					province: address?.province,
					zip: address?.zip,
				},
			}
		)
		return {
			data: response?.data?.customerAddressUpdate?.customerAddress,
			error:
				response?.data?.customerAddressUpdate?.customerUserErrors ||
				response?.error,
		}
	}

	async createCustomerAddress(address: any): Promise<QueryResponseType> {
		const customerAccessToken = this._accessToken || this._fetchAccessToken()
		const response = await this.executeMutation(
			MUTATION_CUSTOMER_ADDRESS_CREATE,
			{
				customerAccessToken,
				address,
			}
		)
		return {
			data: response?.data?.customerAddressCreate?.customerAddress,
			error:
				response?.error ||
				response?.data?.customerAddressCreate?.customerUserErrors,
		}
	}

	async deleteCustomerAddress(id: string): Promise<QueryResponseType> {
		const customerAccessToken = this._accessToken || this._fetchAccessToken()
		const response = await this.executeMutation(
			MUTATION_CUSTOMER_ADDRESS_DELETE,
			{
				customerAccessToken,
				id,
			}
		)
		return {
			data: response?.data?.customerAddressDelete,
			error: response?.error,
		}
	}

	// Customer Orders
	async findCustomerOrders(orderParams): Promise<QueryResponseType> {
		const customerAccessToken = this._accessToken || this._fetchAccessToken()
		const {
			first = 20,
			sortKey = 'CREATED_AT',
			after,
			reverse = false,
			query,
		} = orderParams || {}

		const response = await this.executeQuery(QUERY_CUSTOMER_ORDERS, {
			customerAccessToken,
			first,
			sortKey,
			after,
			reverse,
			query,
		})

		return {
			meta: response?.data?.customer?.orders?.pageInfo,
			data: response?.data?.customer?.orders?.edges?.map((e) => e.node),
			error: response?.error,
		}
	}

	// Menus
	async findMenu(handle: string): Promise<QueryResponseType> {
		const response = await this.executeQuery(QUERY_MENU_BY_HANDLE, { handle })
		return {
			data: response?.data?.menuByHandle,
			error: response?.error,
		}
	}

	// Pages
	async findPage(handle: string): Promise<QueryResponseType> {
		const response = await this.executeQuery(QUERY_PAGE_BY_HANDLE, { handle })
		return {
			data: response?.data?.pageByHandle,
			error: response?.error,
		}
	}

	async findPages(params: any): Promise<QueryResponseType> {
		const { first = 24, query } = params || {}
		const response = await this.executeQuery(QUERY_PAGES, {
			first: first,
			query: query,
		})
		return {
			meta: response?.data?.pages?.pageInfo,
			data: response?.data?.pages?.edges.map((e) => e.node),
			error: response?.error,
		}
	}

	// Shop
	async findShop(): Promise<QueryResponseType> {
		const response = await this.executeQuery(QUERY_SHOP, {})
		return {
			data: response?.data?.shop,
			error: response?.error,
		}
	}

	// Metaobjects
	async findMetaobject(handle: string): Promise<QueryResponseType> {
		const response = await this.executeQuery(QUERY_METAOBJECT_BY_HANDLE, {
			handle,
		})
		return {
			data: response?.data?.metafield,
			error: response?.error,
		}
	}

	async findMetaobjects(params: any): Promise<QueryResponseType> {
		const { first = 20, type } = params || {}
		const response = await this.executeQuery(QUERY_METAOBJECTS, {
			first,
			type,
		})
		return {
			meta: response?.data?.metaobjects?.pageInfo,
			data: response?.data?.metaobjects?.edges.map((e) => e.node),
			error: response?.error,
		}
	}

	decodeBase64(data: any) {
		return Buffer.from(data, 'base64').toString('ascii')
	}

	getBase64DecodedId(id: string) {
		let orderGid = this.decodeBase64(id)
		let orderId = orderGid.split('/')[-1]
		return orderId.split('?')[0]
	}

	// Query execution
	async executeQuery(query: any, variables: any): Promise<QueryResponseType> {
		return await this.apollo.query({
			query: query,
			variables: variables,
		})
	}

	async executeMutation(mutation: any, variables: any): Promise<QueryResponseType> {
		return await this.apollo.mutate({
			mutation: mutation,
			variables: variables,
		})
	}
}

type ShopifyClientParamsType = {
  domain: string 
  storefrontAccessToken: string
  fetchAccessToken?: () => string
  apiVersion?: string
}

// Create the ShopifyClient
export const createClient = ({
  domain,
  storefrontAccessToken,
  fetchAccessToken,
  apiVersion
}: ShopifyClientParamsType): ShopifyClient => {
	return new ShopifyClient(
		domain,
		storefrontAccessToken,
		fetchAccessToken,
		apiVersion
	)
}
