const param = {
    'url': 'https://phonevalidation.abstractapi.com/v1/',
    'api_key': import.meta.env.VITE_API_KEY,
};
export const phoneValidate = async (phone: string) => {
    try {
        const res = await fetch(`${param.url}?api_key=${param.api_key}&phone=${phone}&country=RU`);
        const data: ResponseType = await res.json();
        return data
    } catch (error) {
        console.log(error);
        throw error;
    }
}

type ResponseType = {
    valid: boolean
    number: string
    local_format: string
    international_format: string
    country_prefix: string
    country_code: string
    country_name: string
    location: string
    carrier: string
    line_type: string | null
}