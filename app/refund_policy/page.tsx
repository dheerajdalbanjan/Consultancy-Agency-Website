import React from 'react'

const refund = () => {
  return (
    <div>
        <div className="max-w-5xl mx-auto  p-6 mt-20 rounded-md shadow">
        <h1 className="text-3xl font-semibold mb-6">Refund Policy</h1>

        <p className="mb-4">Last Updated: January 29, 2024</p>

        <p className="mb-4">We aim to provide caring and professional counseling services to all clients. However, we
            understand there may be rare instances where a refund is requested. Here is our policy on refunds:</p>

        <h2 className="text-2xl font-semibold mb-4">Individual Sessions</h2>
        <ul className="list-disc pl-6 mb-4">
            <li>Refund requests must be made within 7 days of session date.</li>
            <li>Refunds are provided if sessions could not be delivered due to technical issues on our end or
                counselor unavailability.</li>
            <li>Refunds are not provided if the client misses or needs to reschedule the session.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Session Packages</h2>
        <ul className="list-disc pl-6 mb-4">
            <li>Unused sessions in pre-paid packages are non-refundable but remain valid for future use during the
                active subscription term.</li>
            <li>Should a subscription need to be canceled early, prorated refunds may be issued for any full unused
                months remaining minus an early termination fee equal to 1 month’s subscription rate.</li>
            <li>Refunds are not offered for custom or discounted subscription packages unless contractually specified
                otherwise.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Payment Refunds</h2>
        <ul className="list-disc pl-6 mb-4">
            <li>Refunds are generally issued back to the original payment method used. Processing time may take 7-14
                days.</li>
            <li>Refund amounts will exclude any payment provider or platform fees which are non-refundable.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">General</h2>
        <ul className="list-disc pl-6 mb-4">
            <li>All refund requests must be submitted via email to <a href="mailto:support@oursoulss.com"
                    className="text-blue-500">oursoulss04@gmail.com</a> for review.</li>
            <li>Refund eligibility is determined at the sole discretion of site management based on policies here.</li>
            <li>By using our services, you understand all sales final unless a refund is provided under terms
                herein.</li>
        </ul>

        <p className="mb-4">We will try to be understanding of impactful extenuating circumstances and make limited
            exceptions if reasonable and feasible. However, our general position is that sales of consultation services
            are final and not eligible for refunds or chargebacks after delivery. We appreciate your understanding.
            Please reach out if you have any questions!</p>
    </div>
    </div>
  )
}

export default refund