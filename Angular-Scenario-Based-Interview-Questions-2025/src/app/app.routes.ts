import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'day01',
    loadComponent: () =>
      import('./scenarios/day01/day01.component').then(m => m.Day01Component)
  },
  {
    path: 'day02',
    loadComponent: () =>
      import('./scenarios/day02/day02.component').then(m => m.Day02Component)
  },{
    path: 'day03',
    loadComponent: () =>
      import('./scenarios/day03/day03.component').then(m => m.Day03Component)
  },{
    path: 'day04',
    loadComponent: () =>
      import('./scenarios/day04/day04.component').then(m => m.Day04Component)
  },{
    path: 'day05',
    loadComponent: () =>
      import('./scenarios/day05/day05.component').then(m => m.Day05Component)
  },{
    path: 'day06',
    loadComponent: () =>
      import('./scenarios/day06/day06.component').then(m => m.Day06Component)
  },{
    path: 'day07',
    loadComponent: () =>
      import('./scenarios/day07/day07.component').then(m => m.Day07Component)
  },{
    path: 'day08',
    loadComponent: () =>
      import('./scenarios/day08/day08.component').then(m => m.Day08Component)
  },{
    path: 'day09',
    loadComponent: () =>
      import('./scenarios/day09/day09.component').then(m => m.Day09Component)
  },{
    path: 'day10',
    loadComponent: () =>
      import('./scenarios/day10/day10.component').then(m => m.Day10Component)
  },{
    path: 'day11',
    loadComponent: () =>
      import('./scenarios/day11/day11.component').then(m => m.Day11Component)
  },{
    path: 'day12',
    loadComponent: () =>
      import('./scenarios/day12/day12.component').then(m => m.Day12Component)
  },{
    path: 'day13',
    loadComponent: () =>
      import('./scenarios/day13/day13.component').then(m => m.Day13Component)
  },{
    path: 'day14',
    loadComponent: () =>
      import('./scenarios/day14/day14.component').then(m => m.Day14Component)
  },{
    path: 'day15',
    loadComponent: () =>
      import('./scenarios/day15/day15.component').then(m => m.Day15Component)
  },{
    path: 'day16',
    loadComponent: () =>
      import('./scenarios/day16/day16.component').then(m => m.Day16Component)
  },{
    path: 'day17',
    loadComponent: () =>
      import('./scenarios/day17/day17.component').then(m => m.Day17Component)
  },{
    path: 'day18',
    loadComponent: () =>
      import('./scenarios/day18/day18.component').then(m => m.Day18Component)
  },{
    path: 'day19',
    loadComponent: () =>
      import('./scenarios/day19/day19.component').then(m => m.Day19Component)
  },{
    path: 'day20',
    loadComponent: () =>
      import('./scenarios/day20/day20.component').then(m => m.Day20Component)
  }
];
