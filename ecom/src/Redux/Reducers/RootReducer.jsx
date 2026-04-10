import { combineReducers } from "@reduxjs/toolkit";

import MaincategoryReducers from "./MaincategoryReducers";
import SubcategoryReducers from "./SubcategoryReducers";
import BrandReducers from "./BrandReducers";
import ProductReducers from "./ProductReducers";
import FeatureReducers from "./FeatureReducers";
import FaqReducers from "./FaqReducers";
import SettingReducers from "./SettingReducers";


export default combineReducers({
    MaincategoryStateData: MaincategoryReducers,
    SubcategoryStateData: SubcategoryReducers,
    BrandStateData: BrandReducers,
    ProductStateData: ProductReducers,
    FeatureStateData: FeatureReducers,
    FaqStateData: FaqReducers,
    SettingStateData: SettingReducers,
})
