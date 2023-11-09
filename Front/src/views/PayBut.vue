<template>
    <div style="background-color: #CEF6F5">
        <div class="row">
            <div class="column center"  margin: auto>
                <form method="post" action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/">
                <input name="merchantId"      type="hidden"  value="508029"   >
                <input name="accountId"       type="hidden"  value="512321" >
                <input name="description"     type="hidden"  value="Test PAYU"  >
                <input name="referenceCode"   type="hidden"  value="TestPay2" >
                <input name="amount"          type="hidden"  value="20000"   >
                <input name="tax"             type="hidden"  value="3193"  >
                <input name="taxReturnBase"   type="hidden"  value="16806" >
                <input name="currency"        type="hidden"  value="COP" >
                <input name="signature"       type="hidden"  value="792ba30ea4fda25624aa525b34e1a78a"  >
                <input name="test"            type="hidden"  value="0" >
                <input name="buyerEmail"      type="hidden"  value="test@test.com" >
                <input name="responseUrl"     type="hidden"  value="http://www.italento.shop" >
                <input name="confirmationUrl" type="hidden"  value="http://www.italento.shop/" >
                <input name="Submit"          type="submit"  value="Pagar" >
                </form>
            </div>
            <div class="column"  margin: auto></div>
        </div>
    </div>
</template>  
<script>
    export default {
	name: 'blog',
	components: {
		
	},
}
</script>

<style>
.center {
  text-align: center;
}
</style>