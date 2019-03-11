import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule, MATERIAL_SANITY_CHECKS, MatSortModule, MatTableModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InstructionComponent } from './instruction/instruction.component';
import { RegistrationComponent } from './registration/registration.component';
import { SigninComponent } from './signin/signin.component';
import { InstructionService } from './instruction.service';
import { RegisterService } from './register.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { EditInstructionComponent } from './edit-instruction/edit-instruction.component';
import { EditUserdataComponent } from './edit-userdata/edit-userdata.component';
import { CreateInstructionComponent } from './create-instruction/create-instruction.component';
import { DndDirective } from './dnd.directive';
import { CreateStepsComponent } from './create-steps/create-steps.component';
import { ViewFullinstructionComponent } from './view-fullinstruction/view-fullinstruction.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { AdministrationComponent } from './administration/administration.component';

const appRoutes: Routes = [
  {path: '', component : InstructionComponent},
  {path: 'registration', component : RegistrationComponent},
  {path: 'signin', component : SigninComponent},
  {path: 'useredit', component : EditInstructionComponent},
  {path: 'addinstruction', component : CreateInstructionComponent},
  {path: 'instructionsteps', component : CreateStepsComponent},
  {path: 'viewInstruction', component : ViewFullinstructionComponent},
  {path: 'usersetting', component : UserSettingsComponent},
  {path: 'admin', component : AdministrationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InstructionComponent,
    RegistrationComponent,
    SigninComponent,
    EditInstructionComponent,
    EditUserdataComponent,
    CreateInstructionComponent,
    DndDirective,
    CreateStepsComponent,
    ViewFullinstructionComponent,
    UserSettingsComponent,
    AdministrationComponent
  ],
  imports: [
    BrowserModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatTabsModule,
    FlexLayoutModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RegisterService, InstructionService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: MATERIAL_SANITY_CHECKS,
      useValue: false
      }],
  bootstrap: [AppComponent]
})
export class AppModule { }
