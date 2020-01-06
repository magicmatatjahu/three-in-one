import { ReducersMapObject } from "redux";
import { Module } from "./types";

export const ACTIONS_KEY = 'actions';
export const REDUCER_KEY = 'reducer';

const extract = <R = { [key: string]: any }>(modules: { [key: string]: Module }, key: string) => {
  return Object.entries(modules)
    .filter(entry => !!entry[1][key])
    .map((entry) => {
      const [moduleName, module] = entry;

      return { [moduleName]: module[key] };
    })
    .reduce((output, entry) => {
      return ({ ...output, ...entry });
    }, {}) as R;
};

export const extractActions = (modules: { [key: string]: Module }) => extract(modules, ACTIONS_KEY);
export const extractReducers = (modules: { [key: string]: Module }) => extract<ReducersMapObject>(modules, REDUCER_KEY);