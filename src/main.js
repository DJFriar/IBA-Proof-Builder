import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		FullName: 'Tommy Craft',
    IBANum: '72302',
    PhoneNum: '469-982-9009',
    Age: '40',
    Gender: 'Male',
    MailingAddress: '7909 Sloan Cir, Plano, TX 75025'
	}
});

export default app;