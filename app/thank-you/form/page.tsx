import React from 'react';

function Page() {
    const urlForAPI = React.useMemo(() => {
        const baseURL = process.env.NODE_ENV === 'production' ? process.env.URL_PROD ?? '' : process.env.URL_LOCAL ?? '';
        return `${baseURL}thank-you/api/`;
    }, []);

    // form send to api https://stg-fa-single.familyassets.com/thank-you/api/
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <form action={urlForAPI} method="POST">
                        <input type="hidden" name="xxTrustedFormCertUrl" value="https://cert.trustedform.com/844283207d1c3b7782aead7a51d5077042475801" />
                        <input type="text" name="name" placeholder="Name" />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Page;
