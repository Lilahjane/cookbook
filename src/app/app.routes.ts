import { Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { ViewComponent } from './view/view.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { SchoolComponent } from './school/school.component';
import { StylingTestComponent } from './styling-test/styling-test.component';

// noinspection TypeScriptValidateTypes

export const routes: Routes = [
    {
        path: 'grid',
        component: GridComponent
    },
    {
        path: 'view/:id',
        component: ViewComponent
    },
    {
        path: 'Grocery List',
        component: GroceryListComponent
    },
    {
        path: 'school',
        component: SchoolComponent
    },
    {
        path: 'DMZ',
        component: StylingTestComponent
    },
    
];
