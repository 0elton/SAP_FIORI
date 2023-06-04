sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("campeonatobrasileiro.controller.Main", {
            onInit: function () {

                 //criar um modelo
                //variaveis do modelo
                var dadosGerais = {
                    rodada: "10ª",
                    campeonato: "Brasileirao 2023 do Canal FioriNet"
                };

                //modelo

                var dadosModel = new JSONModel();

                dadosModel.setData(dadosGerais);
                var view = this.getView();
                view.setModel(dadosModel,"ModeloDadosGerais");

            }
        });
    });
