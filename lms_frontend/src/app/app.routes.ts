import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IssueBookComponent } from './components/issue-book/issue-book.component';
import { ReturnBookComponent } from './components/return-book/return-book.component';
import { SearchBookComponent } from './components/search-book/search-book.component';
import { ShowAllBooksComponent } from './components/show-all-books/show-all-books.component';
import { UsersComponent } from './components/users/users.component';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { AddBooksComponent } from './components/add-books/add-books.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    {path: 'issue', component: IssueBookComponent},
    {path: 'return', component: ReturnBookComponent},
    {path: 'list', component: ShowAllBooksComponent},
    {path: 'search', component: SearchBookComponent },
    {path: 'users', component: UsersComponent},
    {path: 'add-users', component: AddUsersComponent},
    {path: 'add-books', component: AddBooksComponent},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '/dashboard' }
];
