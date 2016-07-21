/// <reference path="typings/index.d.ts" />
import {Request} from "express";
/**
 * Created by kiettv on 7/20/16.
 */
declare module "express-winston" {
    export var requestWhitelist:string[];
    export var bodyWhitelist:string[];
    export var bodyBlacklist:string[];
    export var responseWhitelist:string[];
    export var ignoredRoutes:string[];

    export function defaultRequestFilter(req:Request, propName:string);
    export function defaultResponseFilter(req:Request, propName:string);
    export function defaultSkip();
    //export function filterObject(originalObj:Object, whiteList:string[], initialFilter:(originalObj:Object, propName:string) => any)
    export function errorLogger(options:any);
    export function logger(options:any);
}
