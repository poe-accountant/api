import { ApiEndpoint } from "ninja/api-endpoints.enum.js";
import { ApiResultResponseData } from "ninja/api-request-data.dto.js";

export abstract class NinjaApi {
    abstract request<T extends ApiEndpoint>(
        endpoint: T,
        data: ApiResultResponseData<T>[0]
    ): Promise<ApiResultResponseData<T>[1]>;
}