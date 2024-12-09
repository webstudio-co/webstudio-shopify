import { ShopifyAddressType, ShopifyCustomerType, QueryResponseType, QueryParamsType } from '../types';
export declare class ShopifyClient {
    private _accessToken?;
    private _fetchAccessToken?;
    private apollo;
    constructor(domain: string, storefrontAccessToken: string, fetchAccessToken?: () => string, apiVersion?: string);
    init(): ShopifyClient;
    accessToken(token: string): ShopifyClient;
    findArticle(handle: string): Promise<QueryResponseType>;
    findArticles(params: any): Promise<QueryResponseType>;
    findBlog(handle: string): Promise<QueryResponseType>;
    findBlogs(params: any): Promise<QueryResponseType>;
    findCart(id: string): Promise<QueryResponseType>;
    cartCreate(): Promise<QueryResponseType>;
    cartDiscountCodesUpdate(cartId: string, discountCodes: string[]): Promise<QueryResponseType>;
    cartLineAdd(cartId: string, line: any): Promise<QueryResponseType>;
    cartLinesAdd(cartId: string, lines: any): Promise<QueryResponseType>;
    cartLineRemove(cartId: string, lineId: string): Promise<QueryResponseType>;
    cartLinesRemove(cartId: string, lineIds: string[]): Promise<QueryResponseType>;
    cartLinesUpdate(cartId: string, lines: any): Promise<QueryResponseType>;
    cartBuyerIdentityUpdate(cartId: string, buyerIdentity: any): Promise<QueryResponseType>;
    findCheckout(id: string): Promise<QueryResponseType>;
    checkoutCreate(): Promise<QueryResponseType>;
    addCheckoutLineItem(checkoutId: string, lineItem: any): Promise<QueryResponseType>;
    addCheckoutLineItems(checkoutId: string, lineItems: any): Promise<QueryResponseType>;
    updateCheckoutLineItems(checkoutId: string, lineItems: any): Promise<QueryResponseType>;
    removeCheckoutLineItem(checkoutId: string, lineItemId: string): Promise<QueryResponseType>;
    removeCheckoutLineItems(checkoutId: string, lineItemIds: string[]): Promise<QueryResponseType>;
    applyCheckoutDiscountCode(checkoutId: string, discountCode: string): Promise<QueryResponseType>;
    removeCheckoutDiscountCode(checkoutId: string): Promise<QueryResponseType>;
    findProduct(handle: string): Promise<QueryResponseType>;
    findProductbyId(id: string): Promise<QueryResponseType>;
    findProducts(params: QueryParamsType): Promise<QueryResponseType>;
    searchProducts(params: QueryParamsType): Promise<QueryResponseType>;
    findProductRecommendations(productId: string): Promise<QueryResponseType>;
    findCollection(handle: string, query: any): Promise<QueryResponseType>;
    findCollections(first?: number): Promise<QueryResponseType>;
    login(email: string, password: string): Promise<QueryResponseType>;
    signup(customer: ShopifyCustomerType): Promise<QueryResponseType>;
    forgotPassword(email: string): Promise<QueryResponseType>;
    resetPassword(resetToken: string, password: string): Promise<QueryResponseType>;
    refreshCustomerAccessToken(): Promise<QueryResponseType>;
    logout(): Promise<QueryResponseType>;
    findCustomer(): Promise<QueryResponseType>;
    updateCustomer(customer: ShopifyCustomerType): Promise<QueryResponseType>;
    updateCustomerPassword({ password }: {
        password: any;
    }): Promise<QueryResponseType>;
    findCustomerAddresses(first?: number, cursor?: string): Promise<QueryResponseType>;
    updateCustomerAddress(address: ShopifyAddressType): Promise<QueryResponseType>;
    createCustomerAddress(address: any): Promise<QueryResponseType>;
    deleteCustomerAddress(id: string): Promise<QueryResponseType>;
    findCustomerOrders(orderParams: any): Promise<QueryResponseType>;
    findMenu(handle: string): Promise<QueryResponseType>;
    findPage(handle: string): Promise<QueryResponseType>;
    findPages(params: any): Promise<QueryResponseType>;
    findShop(): Promise<QueryResponseType>;
    findMetaobject(handle: string): Promise<QueryResponseType>;
    findMetaobjects(params: any): Promise<QueryResponseType>;
    decodeBase64(data: any): string;
    getBase64DecodedId(id: string): string;
    executeQuery(query: any, variables: any): Promise<QueryResponseType>;
    executeMutation(mutation: any, variables: any): Promise<QueryResponseType>;
}
export declare const createClient: (domain: string, storefrontAccessToken: string, fetchAccessToken?: () => string, apiVersion?: string) => ShopifyClient;
