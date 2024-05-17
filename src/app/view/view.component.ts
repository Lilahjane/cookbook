import { Component, OnInit, inject } from '@angular/core';
//unsure
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
//unsure
import { RecipeService } from '../recipe.service';
//RecipService is how my app is able to use my json
import { MatTableModule } from '@angular/material/table';
//displays ingredients as table
import { HttpClientModule } from '@angular/common/http';
//unsure what this does
import { RecipeI } from '../recipe-i';
//interface
import { CommonModule } from '@angular/common';
//unsure
import { MatButtonModule } from '@angular/material/button';
import { IngredientI } from '../ingredient-i';
//mat component

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [RouterModule,
    HttpClientModule,
    CommonModule,
    MatButtonModule,
    MatTableModule,],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss',
  providers: [RecipeService]
})
export class ViewComponent implements OnInit {
  private routerParams = inject(ActivatedRoute);
  private router = inject(Router);
  private service = inject(RecipeService);
  public recipe!: RecipeI;
  public displayedColumns: string[] = ['name', 'quantity'];
  public dataSource: IngredientI[] = [];

  ngOnInit(): void {
    this.getRouteParams();
  }

  private getRouteParams() {
    this.routerParams.params.subscribe((data) => {
      this.getRecipeById(+data['id']);
    });
  }

  private getRecipeById(id: number) {
    this.service.getAllRecipes().subscribe((recipes) => {
      const allRecipes = recipes.map((item, index) => {
        return { ...item, id: index + 1 };
      });
      this.recipe = allRecipes.find((x) => x.id == id) || ({} as RecipeI);
      this.dataSource = this.recipe.Ingredients;
    });
  }

  public goBack() {
    this.router.navigateByUrl('/');
  }

  public goToSite() {
    window.open(this.recipe.recipe_url, '_blank');
  }
}
