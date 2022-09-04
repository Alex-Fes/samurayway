export type RootUserProfileType = {
	aboutMe: string;
	contacts: RootUserProfileTypeContacts;
	lookingForAJob: boolean;
	lookingForAJobDescription: string;
	fullName: string;
	userId: number;
	photos: RootUserProfileTypePhotos;
}
export type RootUserProfileTypeContacts = {
	facebook: string;
	website?: any;
	vk: string;
	twitter: string;
	instagram: string;
	youtube?: any;
	github: string;
	mainLink?: any;
}
export type RootUserProfileTypePhotos = {
	small: string;
	large: string;
}