import $ from 'jquery'
import moment from 'moment'

const data = require('~/data/data/navigation.json');
 
export const state = () => data

export const getters = {
	promotionalData: promotionalData,
	interestSummaryData: interestSummaryData
}

export const actions = {
	setAuthenticationState: setAuthenticationState,
	setLoggedInState: setLoggedInState,
	setLoggedOutState: setLoggedOutState
}

export const mutations = {
	'SET_LOGGED_IN_STATE': SET_LOGGED_IN_STATE,
	'SET_LOGGED_OUT_STATE': SET_LOGGED_OUT_STATE
}

function interestSummaryData(state, getters, rootState) {
	var interestSummaryData;
	//
	composeInterestSummaryData();
	//
	return interestSummaryData;
	// private functions
	function composeInterestSummaryData() {
		var personalizationState, preferencesCount, i18nLabels;
		
		//
		interestSummaryData = {};
		personalizationState = rootState.data.personalization;
		preferencesCount = personalizationState.personalizationUtils.preferencesCount;
		i18nLabels = personalizationState.i18nLabels.interestSummary;
		//
		interestSummaryData.type = 'interest-summary';
		interestSummaryData.title = i18nLabels.title;
		interestSummaryData.includesText = i18nLabels.yourInterests;
		interestSummaryData.selectText = i18nLabels.description;
		interestSummaryData.label = i18nLabels.selectedInterests;
		interestSummaryData.summaryList = getSummaryList();
		interestSummaryData.linkUrl = state.accountActionList.loggedInLinks[3].url;
		// private functions
		function getSummaryList() {
			var summaryList;
			//
			composeSummaryList();	
			//
			return summaryList;
			// private functions
			function composeSummaryList() {
				summaryList = [];
				//
				i18nLabels = personalizationState.i18nLabels.interestSummary;
				//
				Object.keys(preferencesCount).forEach(iterateKeys);
			}
			function iterateKeys(key) {
				if (key !== 'total') {
					summaryList.push(preferencesCount[key] + " " + i18nLabels[key]);
				}
			}
		}	
	}

}

function setLoggedInState(ctx) {
	var payload;
	//
	preparePayload();
	//
	ctx.commit('SET_LOGGED_IN_STATE', payload);
	// private functions
	function preparePayload() {
		payload = {
			loggedInLinks: ctx.state.accountActionList.loggedInLinks,
			iconStyle: "icon-person1",
			cell2: ctx.getters.promotionalData,
			cell3: ctx.getters.interestSummaryData
		};
	}
}

function setLoggedOutState(ctx) {
	var payload;
	//
	preparePayload();
	//
	ctx.commit('SET_LOGGED_OUT_STATE', payload);
	//
	function preparePayload() {
		payload = {
			loggedOutLinks: ctx.state.accountActionList.loggedOutLinks,
			iconStyle: "icon-user"
		};
	}
}

function SET_LOGGED_IN_STATE(state, payload) {
	state.accountActionList.flyout.cell1.links = payload.loggedInLinks;
	state.accountActionList.iconStyle = payload.iconStyle;
	state.accountActionList.flyout.cell2 = payload.cell2;
	state.accountActionList.flyout.cell3 = payload.cell3;
	state.mobileTabs.userProfile.icon = payload.iconStyle;
}

function SET_LOGGED_OUT_STATE(state, payload) {
	state.accountActionList.flyout.cell1.links = payload.loggedOutLinks;
	state.accountActionList.iconStyle = payload.iconStyle;
}

function promotionalData(state, getters, rootState) {
	var promotionalData;
	//
	composePromotionalData();
	//
	return promotionalData;
	// private functions
	function composePromotionalData() {
		var profile, personalizationState, i18nLabels;
		//
		personalizationState = rootState.data.personalization;
		profile = personalizationState.personalizationUtils.info.profile;
		i18nLabels = personalizationState.i18nLabels.promotional;
		//
		promotionalData = {};
		promotionalData.type = "promotional";
		promotionalData.welcomeLabel = i18nLabels.welcome;
		promotionalData.userName = profile.firstName + " " + profile.lastName;
		promotionalData.text = i18nLabels.oldUser + " " + getFormattedRegistrationDate();
		promotionalData.label = i18nLabels.myProfileCTA;
		promotionalData.linkUrl = state.accountActionList.loggedInLinks[0].url;
		promotionalData.imgUrl = "/etc/designs/kpmgpublic/images/icon-tag.png";
		promotionalData.newUser1 = i18nLabels.newUser1;
		promotionalData.newUser2 = i18nLabels.newUser2; 
		promotionalData.newUser3 = i18nLabels.newUser3; 
		promotionalData.newUser4 = i18nLabels.newUser4;
		promotionalData.interestUrl = state.accountActionList.loggedInLinks[3].url;
		promotionalData.learnMoreUrl = state.accountActionList.loggedInLinks[2].url;
		// private functions
		function getFormattedRegistrationDate() {
			var formattedRegistrationDate;
			//
			formattedRegistrationDate = moment(personalizationState.personalizationUtils.info.registered).format("MMMM Do, YYYY");
			//
			return formattedRegistrationDate;
		}
	}
}

function setAuthenticationState(ctx, payload) {
	var isSitePersonalized;
	//
	isSitePersonalized = ctx.rootState.data.siteInfo.isPersonalized;
	//
	if (isSitePersonalized) {
		// DISPATCH to set personalization data
		setState();
	}
	// private functions 
	function setState() {
		var isUserLoggedIn;
		//
		//  GET userLoggedIn State from personalizationUtils.accountUtils.
		isUserLoggedIn = ctx.rootState.data.personalization.personalizationUtils.isUserLoggedIn;
		if (isUserLoggedIn) {
			// GET personalizationUtils.accountUtils DATA and SET it on personalization Module
			// SET I18n Labels (if not done already)
			ctx.dispatch('setLoggedInState');
		} else {
			ctx.dispatch('setLoggedOutState');
		}
	}
}