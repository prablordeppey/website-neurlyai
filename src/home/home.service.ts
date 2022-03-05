import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  itemsData!: ItemModel[];
  carouselData!: CarouselModel[]

  constructor() { }

  get getItemsData(){
    return this.itemsData
  }

  get getCarouselData(){
    return this.carouselData
  }

  fetchItemsData(){
    this.itemsData = [
      {
        title: 'what is BigData?',
        img_url: 'big_data',
        description: 'Understanding BigData is a crucial aspect of appreciating the usefulness of Neural Nets and Deep Learning.' +
          'This module gives you all you need to know about BigData',
        resource_link: 'bigdata'
      },
      {
        title: 'what is machine learning?',
        img_url: 'machine_learning',
        description: 'An overview of Machine Learning and problems it seek to solve are also detailed.',
        resource_link: 'machine_learning'
      },
      {
        title: 'traditional classifiers',
        img_url: 'traditional_classifiers',
        description: 'A classifier is a mathematical machine-learning model trained to predict labels or classes of input data. ' +
          'Here, we present the most used classifiers, their implemention and associated algorithms.',
        resource_link: 'traditional_classifiers'
      },
      {
        title: 'traditional regressors',
        img_url: 'traditional_regressors',
        description: 'A regressor is a mathematical machine-learning model trained to predict real valued outputs.',
        resource_link: 'traditional_regressors'
      },
      {
        title: 'Regression vs Classification',
        img_url: 'classification_vs_regression',
        description: 'When to use classification and when not is key in the life of a Data Scientist. High level comparison is presented.',
        resource_link: 'regression_vs_classification'
      },
      {
        title: 'traditional clustering algorithms',
        img_url: 'traditional_clusters',
        description: 'Clustering involves identifying patterns in unlabelled datasets and grouping similar items together.',
        resource_link: 'traditional_clusterers'
      },
    ]
  }

  fetchCarouselData(){
    this.carouselData = [
      {
        title: '',
        img_name: '3way_tensor',
        alt: 'tensor',
        description: '',
        resource_link: 'tensors',
      },
      {
        title: '',
        img_name: 'github_logo',
        alt: 'github repository',
        description: '',
        resource_link: 'https://github.com/prablordeppey',
      },
      {
        title: '',
        img_name: 'youtube_logo2',
        alt: 'youtube channel',
        description: '',
        resource_link: 'https://www.youtube.com/channel/UCFlgJ0SvO5ZWWMJB657_Qdw'
      }
    ]
  }
}
