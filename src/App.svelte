<script>
	let FullName = "";
  let IBANum = "";
  let PhoneNum = "";
  let Age = "";
  let Gender = "";
  let MailingAddress = "";
  let RideName = "";
  let BikeMakeModel = "";
  let OdoMiles = "";
  let GPSMiles = "";
  let MapLink = "";
  let SpotwallaLink = "";
  let StartCity = "";
  let EndCity = "";
  let PayPalTransID = "";
  let StartDate = "";
  let OtherNotes = "";
</script>

<main>
  <p>Fill out all the forms below. Once completed, copy/paste the bottom text into your submission email.</p>
  <p>Note: This is NOT an offically sanctioned app, it is simply intended to make your data as clean as possible, and to ensure that all the info a scorer needs is present to give you the fastest  possible approval time.</p>
  <div class="uk-grid-small uk-child-width-expand" uk-grid>
    <div>
      <h4>Rider Info</h4>
      <div class="uk-grid-small" uk-grid>
        <div class="uk-width-1-1@s">
          <label class="uk-form-label" for="FullName">Name for Cert</label>
          <input class="uk-input" id="FullName" type="text" bind:value={FullName}>
        </div>
        <div class="uk-width-1-1@s">
          <label class="uk-form-label" for="MailingAddress">Mailing Address</label>
          <input class="uk-input" id="MailingAddress" type="text" bind:value={MailingAddress}>
        </div>
        <div class="uk-width-1-3@s">
          <label class="uk-form-label" for="IBANum">IBA Number<i class="infoIcon fal fa-info-circle" uk-tooltip="If this is your first submission, enter 'NEW' in this field."></i></label>
          <input class="uk-input" id="IBANum" type="text" bind:value={IBANum}>
        </div>
        <div class="uk-width-1-3@s">
          <label class="uk-form-label" for="Age">Age</label>
          <input class="uk-input" id="Age" type="text" bind:value={Age}>
        </div>
        <div class="uk-width-1-3@s">
          <label class="uk-form-label" for="Gender">Gender</label>
          <input class="uk-input" id="Gender" type="text" bind:value={Gender}>
        </div>
        <div class="uk-width-1-1@s">
          <label class="uk-form-label" for="PhoneNum">Contact Phone Number</label>
          <input class="uk-input" id="PhoneNum" type="text" bind:value={PhoneNum}>
        </div>
        <div class="uk-width-1-1@s">
          <label class="uk-form-label" for="BikeMakeModel">Motorcycle Make/Model<i class="infoIcon fal fa-info-circle" uk-tooltip="This hsould be in the form of Year Make Model, ie '2018 Honda Gold Wing'."></i></label>
          <input class="uk-input" id="BikeMakeModel" type="text" bind:value={BikeMakeModel}>
        </div>
      </div>
    </div>
    <div>
      <h4>Ride Info</h4>
      <div class="uk-grid-small" uk-grid>
        <div class="uk-width-1-1@s">
          <label class="uk-form-label" for="RideName">Ride Attempted<i class="infoIcon fal fa-info-circle" uk-tooltip="Be very specific, ie 'Texas In-State SaddleSore 1000', or 'SaddleSore 2000 Gold', etc."></i></label>
          <input class="uk-input" id="RideName" type="text" bind:value={RideName}>
        </div>
        <div class="uk-width-1-2@s">
          <label class="uk-form-label" for="StartDate">Start Date</label>
          <input class="uk-input" id="StartDate" type="text" bind:value={StartDate}>
        </div>
        <div class="uk-width-1-2@s">
          <label class="uk-form-label" for="PayPalTransID">PayPal Transaction ID<i class="infoIcon fal fa-info-circle" uk-tooltip="You must have paid with PayPal first before submitting your application."></i></label>
          <input class="uk-input" id="PayPalTransID" type="text" bind:value={PayPalTransID}>
        </div>
        <div class="uk-width-1-2@s">
          <label class="uk-form-label" for="OdoMiles">Odometer Miles<i class="infoIcon fal fa-info-circle" uk-tooltip="The mileage as shown on your motorcycle's odometer."></i></label>
          <input class="uk-input" id="OdoMiles" type="text" bind:value={OdoMiles}>
        </div>
        <div class="uk-width-1-2@s">
          <label class="uk-form-label" for="GPSMiles">GPS Miles<i class="infoIcon fal fa-info-circle" uk-tooltip="The mileage as calculated when you plotted your stops on an online map."></i></label>
          <input class="uk-input" id="GPSMiles" type="text" bind:value={GPSMiles}>
        </div>
        <div class="uk-width-1-2@s">
          <label class="uk-form-label" for="MapLink">Link to Online Map</label>
          <input class="uk-input" id="MapLink" type="text" bind:value={MapLink}>
        </div>
        <div class="uk-width-1-2@s">
          <label class="uk-form-label" for="SpotwallaLink">Link to <a href="https://new.spotwalla.com" target="_blank">Spotwalla</a> Trip<i class="infoIcon fal fa-info-circle" uk-tooltip="This tool requires you use Spotwalla. There is zero reason for you not to use it."></i></label>
          <input class="uk-input" id="SpotwallaLink" type="text" bind:value={SpotwallaLink}>
        </div>
        <div class="uk-width-1-2@s">
          <label class="uk-form-label" for="StartCity">Starting City<i class="infoIcon fal fa-info-circle" uk-tooltip="Enter this exactly how you want it to appear on your cert."></i></label>
          <input class="uk-input" id="StartCity" type="text" bind:value={StartCity}>
        </div>
        <div class="uk-width-1-2@s">
          <label class="uk-form-label" for="EndCity">Ending City<i class="infoIcon fal fa-info-circle" uk-tooltip="Enter this exactly how you want it to appear on your cert."></i></label>
          <input class="uk-input" id="EndCity" type="text" bind:value={EndCity}>
        </div>
        <div class="uk-width-1-1@s">
          <label class="uk-form-label" for="OtherNotes">Important Notes</label>
          <textarea class="uk-input" id="OtherNotes" rows="4" bind:value={OtherNotes}></textarea>
        </div>
      </div>
    </div>
  </div>
  <div>
    <h2>IBA Ride Application</h2>
    {#if RideName}
      <p><strong>Ride are you applying for:</strong> {RideName}</p>
    {/if}
    {#if MailingAddress}
      <p><strong>Address to mail the certificate to:</strong> {MailingAddress}</p>
    {/if}
    {#if PhoneNum}
      <p><strong>Contact phone number:</strong> {PhoneNum}</p>
    {/if}
    {#if IBANum}
      <p><strong>Are you a NEW or EXISTING IBA member:</strong> EXISTING ({IBANum})</p>
    {/if}
    {#if Age}
      <p><strong>Your age:</strong> {Age}</p>
    {/if}
    {#if Gender}
      <p><strong>Gender:</strong> {Gender}</p>
    {/if}
    {#if StartDate}
      <p><strong>Date of ride start:</strong> {StartDate}</p>
    {/if}
    {#if FullName}
      <p><strong>Name you want on the certificate:</strong> {FullName}</p>
    {/if}
    {#if BikeMakeModel}
      <p><strong>Motorcycle Make/Model:</strong> {BikeMakeModel}</p>
    {/if}
    {#if OdoMiles}
      <p><strong>Odometer miles:</strong> {OdoMiles}</p>
    {/if}
    {#if GPSMiles}
      <p><strong>GPS miles:</strong> {GPSMiles}</p>
    {/if}
    {#if MapLink}
      <p><strong>Link to online map:</strong> {MapLink}</p>
    {/if}
    {#if SpotwallaLink}
      <p><strong>Link to Spotwalla trip:</strong> {SpotwallaLink}</p>
    {/if}
    {#if StartCity}
      <p><strong>Name of start city:</strong> {StartCity}</p>
    {/if}
    {#if EndCity}
      <p><strong>Name of ending city:</strong> {EndCity}</p>
    {/if}
    {#if PayPalTransID}
      <p><strong>PayPal Transaction ID:</strong> {PayPalTransID}</p>
    {/if}
  </div>	
</main>
<footer>
  &copy; 2021 <a href="https://www.ambitiousnerds.com" target="_blank">ambitiousNerds</a>
</footer>

<style>
	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>