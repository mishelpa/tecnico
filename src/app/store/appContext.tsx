'use client'
import React, { useState } from "react";
import getState from "./flux";

export const Context = React.createContext<any>({store: {plans: []}, actions: {}});

const injectContext = (PassedComponent: any) => {
	const StoreWrapper = (props : any) => {
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: (updatedStore: any) =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;