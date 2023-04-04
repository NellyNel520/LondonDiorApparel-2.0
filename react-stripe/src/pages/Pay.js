import axios from 'axios'

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'

const KEY="pk_test_51MsoK7ApFenuQy8MR8LgDNJu3AtBcuO8LjCDKeQn10hJ6EE8p0G29GkIdTYBYk8EOQsYFvMpOXvOHMFeDt4FN4kY00vus1QbyV"
const Pay = () => {
	const [stripeToken, setStripeToken] = useState(null)
  let navigate = useNavigate()

	const onToken = (token) => {
		setStripeToken(token)
	}

	useEffect(() => {
		const makeRequest = async () => {
			try {
				const response = await axios.post(
					'http://localhost:3001/api/checkout/payment', {
            tokenId:stripeToken.id,
            amount: 2000,

          }
				)
        console.log(response.data)
        navigate('/success')
			} catch (err) {
				console.log(err)
			}
		}
    stripeToken && makeRequest()
	}, [stripeToken, navigate])
	return (
		<div className="flex justify-center mt-[20%]">
    {stripeToken ? (<span>Processing. Please wait....</span>) : (

    
			<StripeCheckout
				name="London Dior Apparel"
				image="https://i.ibb.co/JxgT8GP/LDA-Logo-Blue2.png"
				billingAddress
				shippingAddress
				description="Your total is $20"
				amount={2000}
				token={onToken}
				stripeKey={KEY}
			>
				<button className="text-2xl border-2 rounded border-blue-600 p-5 hover:bg-blue-400 ">
					Pay Now
				</button>
			</StripeCheckout>
      )}
		</div>
	)
}

export default Pay

// <StripeCheckout
//         token={this.onToken}
//         stripeKey="my_PUBLISHABLE_stripekey"
// />
