import {
  ICreateAttachment,
  ICreateLog,
} from "@cucumber/cucumber/lib/runtime/attachment_manager";
import { Page } from "playwright";

declare module "@cucumber/cucumber" {
  interface IWorld<ParametersType = any> {
    page?: Page;
    readonly attach: ICreateAttachment;
    readonly log: ICreateLog;
    readonly parameters: ParametersType;
    [key: string]: any;
  }
}