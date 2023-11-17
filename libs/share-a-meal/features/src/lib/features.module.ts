import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealListComponent } from './meal/meal-list.component';
import { MealDetailComponent } from './meal/meal-detail/meal-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MealService } from './meal/meal.service';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [
    MealListComponent,
    MealDetailComponent,
    AboutComponent,
    HomepageComponent,
  ],
  providers: [MealService],
  exports: [MealListComponent, MealDetailComponent, HomepageComponent],
})
export class FeaturesModule {}
