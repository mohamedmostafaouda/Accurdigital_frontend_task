import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LeftsidenavComponent } from './components/leftsidenav/leftsidenav.component';
import { ProfiledataComponent } from './components/profiledata/profiledata.component';
import { DashboardlogoComponent } from './components/dashboardlogo/dashboardlogo.component';
import { OptionslistComponent } from './components/optionslist/optionslist.component';
import { OptionComponent } from './components/option/option.component';
import { NavComponent } from './components/nav/nav.component';
import { NavlistComponent } from './components/navlist/navlist.component';
import { NavitemComponent } from './components/navitem/navitem.component';
import { PagetitleComponent } from './components/pagetitle/pagetitle.component';
import { ChartsmenuComponent } from './components/chartsmenu/chartsmenu.component';
import { ChartsselectorComponent } from './components/chartsselector/chartsselector.component';
import { ChartslistComponent } from './components/chartslist/chartslist.component';
import { ChartComponent } from './components/chart/chart.component';
import { ChartviewerComponent } from './components/chartviewer/chartviewer.component';
import { CharttypeComponent } from './components/charttype/charttype.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LeftsidenavComponent,
    ProfiledataComponent,
    DashboardlogoComponent,
    OptionslistComponent,
    OptionComponent,
    NavComponent,
    NavlistComponent,
    NavitemComponent,
    PagetitleComponent,
    ChartsmenuComponent,
    ChartsselectorComponent,
    ChartslistComponent,
    ChartComponent,
    ChartviewerComponent,
    CharttypeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
