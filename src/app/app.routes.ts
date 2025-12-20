import { Routes } from '@angular/router';
import { Databinding } from '../databinding/databinding';
import { Testing } from './testing/testing';
import { Basicsignal } from './basicsignal/basicsignal';
import { Ngstyle } from './ngstyle/ngstyle';
import { GetAPIexample } from './get-apiexample/get-apiexample';
import { Busvendor } from './busvendor/busvendor';

export const routes: Routes = [
{
 path:'databinding', component:Databinding
},
{
    path:'test', component:Testing
},
{
    path:'signal', component:Basicsignal
},
{
    path:'ngstyle', component:Ngstyle
},
{
    path:'getAPI', component:GetAPIexample
},
{
    path:'vendorcrud', component:Busvendor
},
];
