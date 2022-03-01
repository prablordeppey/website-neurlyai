import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  items!: ItemModel[]

  constructor() { }

  get getItems(){
    return this.items
  }

  fetchItems(){
    this.items = [
      {
        img_url: 'https://bltimages-cdn1.global.ssl.fastly.net/uploads/event/banner/191997/bigdata.png',
        title: 'What is BigData?',
        description: 'Understanding BigData is a crucial aspect of appreciating the usefulness of Neural Nets and Deep Learning.' +
          'This module gives you all you need to know about BigData',
        resource_link: 'bigdata'
      },
      {
        img_url: 'https://solvimm.com/wp-content/uploads/2018/09/o-que-e-machine-learning-capa.png',
        title: 'What is machine learning?',
        description: 'An overview of Machine Learning and problems it seek to solve are also detailed.',
        resource_link: 'machine_learning'
      },
      {
        img_url: 'https://livecodestream.dev/post/top-ml-algorithms-for-classification/featured_hu4319d5ff4a4e9c05cba253c9f6e69f4d_112537_680x0_resize_q90_h2_lanczos.webp',
        title: 'traditional classifiers',
        description: 'A classifier is a mathematical machine-learning model trained to predict labels or classes of input data. ' +
          'Here, we present the most used classifiers, their implementaion and associated algorithms.',
        resource_link: 'traditional_classifiers'
      },
      {
        img_url: 'https://static.javatpoint.com/tutorial/machine-learning/images/types-of-regression.png',
        title: 'traditional regressors',
        description: 'A regressor is a mathematical machine-learning model trained to predict real valued outputs.',
        resource_link: 'traditional_regressors'
      },
      {
        img_url: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/75/11453069b511e3bca95d57a55dab34/RegressionModels.jpg?auto=format%2Ccompress&dpr=1',
        title: 'Regression vs Classification',
        description: 'When to use classification and when not is key in the life of a Data Scientist. High level comparison is presented.',
        resource_link: 'regression_vs_classification'
      },
    ]
  }
}
