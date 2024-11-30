import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Categories
  categories: string[] = ['Food', 'Games', 'Art', 'Cars', 'Music', 'Fashion'];
  searchQuery: string = '';
  connect: boolean = true; // Set to true when the user is logged in

  // Sorting Options
  sortOptions: string[] = ['A-Z', 'Biggest', 'Goal'];

  // All Projects Data
  allProjects = [
    {
      title: 'Restaurant Rapide',
      image: 'assets/restaurant.jpg',
      details: 'Details about the project',
      amountRaised: 502480,
      goal: 200000,
      category: 'Food'
    },
    {
      title: 'Brasserie',
      image: 'assets/brasserie.jpg',
      details: 'Details about the project',
      amountRaised: 30050,
      goal: 100000,
      category: 'Food'
    },
    {
      title: 'Internet Cafe',
      image: 'assets/internet-cafe.jpg',
      details: 'Details about the project',
      amountRaised: 100210,
      goal: 400000,
      category: 'Games'
    },
    {
      title: 'Bakery',
      image: 'assets/bakery.jpg',
      details: 'Details about the project',
      amountRaised: 75320,
      goal: 150000,
      category: 'Art'
    },
    {
      title: 'Fitness Center',
      image: 'assets/fitness-center.jpg',
      details: 'Details about the project',
      amountRaised: 250890,
      goal: 500000,
      category: 'Fashion'
    }
  ];

  // Displayed Projects
  projects = [...this.allProjects];

  // Filter Projects by Category
  filterByCategory(category: string): void {
    this.projects = category
      ? this.allProjects.filter(project => project.category === category)
      : [...this.allProjects];
  }

  // Sort Projects
  sortProjects(sortOption: string): void {
    switch (sortOption) {
      case 'A-Z':
        this.projects.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'Biggest':
        this.projects.sort((a, b) => b.amountRaised - a.amountRaised);
        break;
      case 'Goal':
        this.projects.sort((a, b) => {
          if (b.goal !== a.goal) {
            return b.goal - a.goal; // Higher goal first
          }
          return a.title.localeCompare(b.title); // Fallback to alphabetical order
        });
        break;
      default:
        break;
    }
  }

  // Search Projects
  searchProjects(): void {
    const searchText = this.searchQuery.trim().toLowerCase();
    this.projects = this.allProjects.filter(project =>
      project.title.toLowerCase().includes(searchText) ||
      project.details.toLowerCase().includes(searchText)
    );
  }
}
