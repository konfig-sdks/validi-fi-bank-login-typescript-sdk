type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/v4/CONNECT/Banks-GET': {
        parameters: [
            {
                name: 'search'
            },
        ]
    },
    '/v4/CONNECT/Session-POST': {
        parameters: [
        ]
    },
    '/v4/accounts/{accountToken}/export-GET': {
        parameters: [
            {
                name: 'accountToken'
            },
        ]
    },
    '/v4/Insights/2/{inquiryId}-GET': {
        parameters: [
            {
                name: 'inquiryId'
            },
        ]
    },
    '/v4/Insights-POST': {
        parameters: [
        ]
    },
    '/v4/affordai-POST': {
        parameters: [
        ]
    },
    '/v4/HealthCheck-GET': {
        parameters: [
        ]
    },
    '/v4/token-POST': {
        parameters: [
            {
                name: 'clientId'
            },
            {
                name: 'clientSecret'
            },
        ]
    },
}