export async function POST(request: Request): Promise<Response> {
    const paramsString = await request.text();
    const params = new URLSearchParams(paramsString);
    const data: { [key: string]: string | string[] } = {};

    for (const [key, value] of Array.from(params.entries())) {
        if (key === 'funding_methods') {
            data[key] = JSON.parse(decodeURIComponent(value));
        } else {
            data[key] = decodeURIComponent(value);
        }
    }

    // Extraer el valor de trusted_url
    const trusted_url = data.xxTrustedFormCertUrl;

    if (!trusted_url) {
        return new Response(JSON.stringify({ error: 'trusted_url is required' }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }


    const trustedUrlValue = Array.isArray(trusted_url) ? trusted_url[0] : trusted_url;

    // Tomar el valor de trustedUrlValue y usar solo la parte del id
    const id = trustedUrlValue.split('/')[3];
    
    const baseURL = process.env.NODE_ENV === 'production' ? process.env.URL_PROD ?? '' : process.env.URL_LOCAL ?? '';


    // Enviar una respuesta de redireccionamiento
    return new Response(null, {
        status: 302,
        headers: {
            'Location': `${baseURL}thank-you/${id}/`,
            'Content-Type': 'text/plain'
        }
    });
}