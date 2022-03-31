import * as topCarsAction from "./topAuto";
import * as userAction from "./user";
import * as carsAction  from "./auto";

export default {
    ...topCarsAction,
    ...userAction,
    ...carsAction
}
