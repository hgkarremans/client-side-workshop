import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealListComponent } from './meal/meal-list.component';
import { MealDetailComponent } from './meal/meal-detail/meal-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MealService } from './meal/meal.service';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [MealListComponent, MealDetailComponent, AboutComponent],
  providers: [MealService],
  exports: [MealListComponent, MealDetailComponent],
})
export class FeaturesModule {}
