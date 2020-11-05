import { createStore } from 'vuex'
import Routes from "../routes-config.js"
import axois from "axios";
 
export default createStore({
  state() {
    return {
      ip : "127.0.0.1",
      port : "1235",
      routerConf: {},
      routesUpdated : false,
      files : [],
      fileInfo : {},
      bins :[],
      binInfo :{}
    }
  },
  mutations: {
    getFilesFromServer(state){

      axois
        .get("/assets")                               
        .then((resp) => {                                                          
          if (resp.status == 200) {
            return resp.data;
          }
        })
        .catch((error) => {
          console.error("Error occured---->" + error);
        })
        .then((data) => {
          console.log(data["files"]);

          state.files = data["files"];
        });
    },
    getBinsFromServer(state){
      axois
        .get("/bins")
        .then((resp) => {
          if (resp.status == 200) {
            return resp.data;
          }
        })
        .catch((error) => {
          console.error("Error occured---->" + error);
        })
        .then((data) => {
          console.log(data["bins"]);

          state.bins = data["bins"];
        });
    },
    loadfileInfo(state, payload){
      axois
        .get("/assets/"+payload.fileId)
        .then((resp) => {
          if (resp.status == 200) {
            return resp.data;
          }
        })
        .catch((error) => {
          console.error("Error occured---->" + error);
        })
        .then((data) => {

          state.fileInfo = data;
        });
    },
    loadbinInfo(state, payload){
      axois
        .get("/bins/"+payload.binId)
        .then((resp) => {
          if (resp.status == 200) {
            return resp.data;
          }
        })
        .catch((error) => {
          console.error("Error occured---->" + error);
        })
        .then((data) => {

          state.binInfo = data;
        });
    }
  },
  actions: {
  },
  modules: {
  },
  getters :{
    getRoutesInfo(state){
      

      if (!state.routesUpdated){
        for (const route of Routes) {
          state.routerConf[route.name] = route.isEnabled
        }        
        state.routesUpdated = true
      }
      return state.routerConf
    },
    getFiles(state){
      return state.files
    },
    getBins(state){
      return state.bins
    },
    getFileInfo(state){
      return state.fileInfo
    },
    getBinInfo(state){
      return state.binInfo
    }

  }
})
