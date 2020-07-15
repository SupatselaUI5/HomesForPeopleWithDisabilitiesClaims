sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device"
], function (Controller, Device) {
	"use strict";

	return Controller.extend("gdsd.HomesForPeopleWithDisabilities.controller.FrontPage", {
		onInit: function () {
			this._mViewSettingsDialogs = {};
		},
		createFormDialog: function (sDialogFragmentName) {

			// https://stackoverflow.com/questions/55667673/how-to-remove-duplicates-and-display-only-unique-values-in-viewsettingsitem
			var oDialog = this._mViewSettingsDialogs[sDialogFragmentName];
			if (!oDialog) {
				oDialog = sap.ui.xmlfragment(sDialogFragmentName, this);
				this._mViewSettingsDialogs[sDialogFragmentName] = oDialog;

				if (Device.system.desktop) {
					oDialog.addStyleClass("sapUiSizeCompact");
				}
			}
			return oDialog;
		},

		handleHomesButtonPressed: function () {
			this.createFormDialog("gdsd.HomesForPeopleWithDisabilities.Fragments.HomesforPersons").open();
		},

		handleServicesButtonPressed: function () {
			this.createFormDialog("gdsd.HomesForPeopleWithDisabilities.Fragments.SpecialServices").open();
		},

		handleSummaryOfStaffButtonPressed: function () {
			this.createFormDialog("gdsd.HomesForPeopleWithDisabilities.Fragments.SummaryofStaff").open();
		},
		onCancel: function () {
			//Cater for the age group selected 
			var oDialogKey,
				oDialogValue;

			for (oDialogKey in this._mViewSettingsDialogs) {
				oDialogValue = this._mViewSettingsDialogs[oDialogKey];

				if (oDialogValue) {
					oDialogValue.close();
					// oDialogValue = null;
				}
			}
		},

		onAddHomesForPersonsItem: function (oEvent) {
			var oTable = this.byId("tblHomesForPersons");
			var columnListItemNewLine = new sap.m.ColumnListItem({
				cells: [
					new sap.m.Text({
						text: sap.ui.getCore().byId("hpSurname").getValue()
					}),
					new sap.m.Text({
						text: sap.ui.getCore().byId("hpID").getValue()
					}),
					new sap.m.Text({
						text: sap.ui.getCore().byId("hpID").getValue()
					})
				]
			});
			oTable.addItem(columnListItemNewLine);
			this.onCancel();
		},

		onAddSpecialServiceItem: function (oEvent) {
			var oTable = this.byId("tblSpecialService");
			var columnListItemNewLine = new sap.m.ColumnListItem({
				cells: [
					new sap.m.Text({
						text: sap.ui.getCore().byId("ssSurname").getValue()
					}),
					new sap.m.Text({
						text: sap.ui.getCore().byId("ssID").getValue()
					}),
					new sap.m.Text({
						text: sap.ui.getCore().byId("ssAge").getValue()
					})
				]
			});
			oTable.addItem(columnListItemNewLine);
			this.onCancel();
		},

		onAddStaffSummaryItem: function (oEvent) {
			var oTable = this.byId("tblStaffSummary");
			var columnListItemNewLine = new sap.m.ColumnListItem({
				cells: [
					new sap.m.Text({
						text: sap.ui.getCore().byId("spSurname").getValue()
					}),
					new sap.m.Text({
						text: sap.ui.getCore().byId("spID").getValue()
					}),
					new sap.m.Text({
						text: sap.ui.getCore().byId("spGender").getValue()
					})
				]
			});
			oTable.addItem(columnListItemNewLine);
			this.onCancel();
		}

	});
});