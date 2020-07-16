import { PhoneNumberFormat, PhoneNumberUtil } from "google-libphonenumber";


export const getFormatPhoneNumber = (phoneNumber) => {
	const phoneUtil = PhoneNumberUtil.getInstance();
	const parsedNumber = phoneUtil.parse(phoneNumber, "BR");
	return phoneUtil.format(parsedNumber, PhoneNumberFormat.NATIONAL);
};
