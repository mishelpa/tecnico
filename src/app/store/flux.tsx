import { FormDataInitial } from "../models/formData.interface";
import { Plan } from "../models/plan.interface";

const getState = ({
  getStore,
  getActions,
  setStore,
}: {
  getStore: any;
  getActions: any;
  setStore: any;
}) => {
  return {
    store: {
      plans: [],
      user: {},
      planSelected: {},
      typeDocument: [
        { label: 'DNI', value: 'DNI'},
        { label: 'C.E.', value: 'CE'}
      ],
      optionSelected: '',
      pricePlan: 0,
      ageUser: 0,
    },
    actions: {
      // Cargar la lista de planes
      getPlans: async () => {
        const url = `https://rimac-front-end-challenge.netlify.app/api/plans.json`;
        let plans = [];
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("La solicitud no fue exitosa");
          }

          const data = await response.json();
          plans = data.list;
        } catch (error: any) {
          throw error;
        }

        setStore({ plans });
      },

      //Obtener datos del usuario
      getUser: async () => {
        const url = 'https://rimac-front-end-challenge.netlify.app/api/user.json';
        let user = [];
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("La solicitud no fue exitosa");
          }

          const data = await response.json();
          user = data;

          const today = new Date();
          const birthday = new Date(user.birthDay);
         
          
          let ageUser = today.getFullYear() - birthday.getFullYear();          
          var m = today.getMonth() - birthday.getMonth();
      
          if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
              ageUser--;
          }
          setStore({ageUser})
        } catch (error: any) {
          throw error;
        }

        setStore({ user });
      },

      getPlanSelected: (planSelected: Plan) => {
        setStore({planSelected})
      },

      getFormData: (formData: FormDataInitial) => {        
        setStore({formData})
      },

      getOptionInitial: (optionSelected: any) => {        
        setStore({optionSelected})
      },

      getPricePlan: (pricePlan: number) => {
        const store = getStore();
        if (store.optionSelected === 'option1') {
          setStore({pricePlan})
        } 
        if (store.optionSelected === 'option2'){
          setStore({pricePlan: pricePlan * 0.95})
        }
      },
    },
  };
};

export default getState;
