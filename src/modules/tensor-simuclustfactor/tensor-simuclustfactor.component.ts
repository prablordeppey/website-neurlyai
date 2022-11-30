import {AfterContentInit, AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import {faChevronCircleLeft, faChevronCircleRight} from '@fortawesome/free-solid-svg-icons'
import {Capitalize} from "../../_shared/_helpers/utils"
import {environment} from "../../environments/environment";
import {numeric} from "mathjax-full/js/util/Entities";

@Component({
  selector: 'app-tensor-simuclustfactor',
  templateUrl: './tensor-simuclustfactor.component.html',
  styleUrls: ['./tensor-simuclustfactor.component.css']
})
export class TensorSimuclustfactorComponent implements OnInit {

  imgs_dir: string = environment['imgs_dir']
  parser = new DOMParser();
  showOutline = true;
  arrowLeft = faChevronCircleLeft
  arrowRight = faChevronCircleRight

  data: ContentModel = {
    "prerequisites": [
      {"name": "factorial reduction", "resourceLink": "factorial-reduction"},
      {"name": "k-means clustering", "resourceLink": "kmeans-clustering"}
    ],
    "aim_objectives": {
      "aim": `<p>
        The aim of this presentation is to provide a basic understanding of how to perform tandem and simultaneous
        clustering-factorial reduction on large three-mode datasets with several variable and occasion dimensions, in
        reference to Vichi et. al. <a href=""></a>. Thus, we wish to decompose $X_{I\\_J\\_K}$ over the matricized
        relation
        $X_{I\\_JK}=U_{I\\_G}\\cdot \\overline{Y}_{G\\_QR}\\cdot \\left( C_{K\\_R}\\bigotimes B_{J\\_Q} \\right)+E_{I\\_JK}$
        where $U_{I\\_G}$ is a binary stochastic membership matrix assigning the $I$ units to their respective clusters,
        updated via the k-means clustering technique. $B_{J\\_Q}$ and $C_{K\\_R}$ are column-wise orthonormal factor
        matrices and $E_{I\\_JK}$ is the residual term matrix for the decomposition. The figure below presents the terms in
        the above relation in their unmatricized tensor state.
        <p class='text-center'><img title="Tensors" class="w-50 h-50" src='${this.imgs_dir}/3mode_tensors/tensor_data_aim.png'></p>
      </p>
      `,
      "objectives": ['Introduction to tensors','Tucker Decomposition', 'Tandem Models', 'Simultaneous Models']
    },
    "main_content":[
      {
        "long_name": "three-mode tensors",
        "short_name": "three-mode tensors",
        "description": [
          `<p>
            Tensors are a fundamental data structure representation in Mathematics used to describe the nature of
            measurements. The rank (also called mode, order, or degree) of a tensor $T$ is the minimum number of
            lower-rank tensors (Rank-1), whose outer products construct $T$. For instance, for Rank-2 tensors, such
            operation involves taking the outer product of $2$ Rank-1 tensors, whereas, for Rank-3 tensor construction,
            we take the outer product of $3$ Rank-1 tensors. The below presents a generic illustration of such
            structures up to Rank-3.
            <br>
            <p class='text-center'><img title="Tensors" class="w-50 h-50" src='${this.imgs_dir}/3mode_tensors/three-mode-tensors.png'></p>
            <div class="d-flex">
                <img title="rank-2 tensor construction" class='center w-50 h-50' src='${this.imgs_dir}/3mode_tensors/rank-2-tensor-construction.png'>
                <img title="rank-3 tensor construction" class='center w-50 h-50' src='${this.imgs_dir}/3mode_tensors/rank-3-tensor-construction.png'>
            </div>
          </p>`,
          `
          <p>
            A <b>Rank-0</b> tensor has only one element as datapoint. Such representation is popularly known as a scalar
            or magnitude. <b>Rank-1</b> tensors are known as arrays or vectors. These could be represented either
            vertically (spanned by columns) or horizontally (spanned by rows). <b>Rank-2</b> tensors are also popularly
            termed matrices. They span both the row (units) and column (variables) spaces. Thus $2$ indices are required
            to uniquely identify each entry of Rank-2 tensors. The <b>Rank-3</b> tensors are the focus of this
            presentation, spanned by units (rows), variables (columns) and the occasions (diagonal) spaces. Also, $3$
            indices are required to uniquely identify each entry of Rank-3 tensors. They are usually called three-way
            or three-mode tensors.
          </p>
          `,
          `<p>
            The dimension of a tensor hereafter, is defined as the number of units/objects spanned by the space under consideration.
            For instance, a vector with $5$ elements is a rank-1 tensor of dimension $4$. A matrix $M^{5\\times 4}$ is a rank-2
            tensor with $5$ units spanned by the row space and $4$ variables spanned by the column space. Finally, a cubed data
            $T^{5\\times 4\\times 3}$ is a rank-3 tensor spanned by $5$ units in the row space, $4$ variables in the variable space
            and 3 occasions in the occasions space as illustrated below.
            <br>
            <p class='text-center'><img title="tensor rank and dimensions" class="w-50 h-50" src='${this.imgs_dir}/3mode_tensors/ranks_dimensions.png'></p>
          </p>`,
          `<p>
            Representation of measurements in a three-mode tensor structure has become very common in science. It is often the straightforward
            representation obtained from sophisticated measurement equipment such as radar signal processing; data extracted from positron
            emission tomography scan on different areas of the brain, measured for various individuals performing a
            number of different mental tasks in neuroscience. Furthermore, in general health science, three-mode data are collected on the strength
            of various symptoms observed on multiple patients by several clinicians. Last but not least, in human resource analysis, data collected
            on the importance of various job requirements for various jobs according to different job analyses are three-mode datasets.
          </p>
          `
        ]
      },
      {
        "long_name": "notations",
        "short_name": "notations",
        "description": [
          `<p><dfn><abbr title="original dimension" id="ijk">$I,J,K:$</abbr></dfn> number of units, variables and
            occasions respectively.</p>
          <p><dfn><abbr title="reduced space dimension" id="gqr">$G,Q,R:$</abbr></dfn> number of clusters for units,
          components for variables and occasions respectively, where $G\\leq I$, $Q\\leq J$ and
          $R\\leq K$</p>
          <p><dfn><abbr title="original tensor" id="X">$X_{I\\_J\\_K}:$</abbr></dfn> original three-mode tensor</p>
          <p><dfn><abbr title="mode-1 matricized tensor" id="Xijk">$X_{I\\_JK}:$</abbr></dfn> mode-1 matricized version
          of <a href="#X">X</a></p>
          <p><dfn><abbr title="mode-2 matricized tensor" id="Xjki">$X_{J\\_KI}:$</abbr></dfn> mode-2 matricized version
          of <a href="#X">X</a></p>
          <p><dfn><abbr title="mode-3 matricized tensor" id="Xkij">$X_{K\\_IJ}:$</abbr></dfn> mode-3 matricized version
          of <a href="#X">X</a></p>
          <p><dfn><abbr title="membership matrix" id="Uig">$U_{I\\_G}:$</abbr></dfn> binary membership
          function matrix defining clusterings for units into $G$ clusters, where $u_{ig}=1$ if the $i^{th}$ object
          belongs to cluster $G$, $u_{ig}=0$ otherwise. Matrix $U_{I\\_G}$ is row stochastic, in that
          $\\sum_{j}u_{ij}=1, \\forall i$.
          </p>
          <p><dfn><abbr title="variables factor matrix" id="Bjq">$B_{J\\_Q}:$</abbr></dfn> $(J\\times Q)$ columnwise
          orthonormal component weights matrix for variables where each $b_{j\\_q}$ entry is the weight
          associated with the $j^{th}$ variable on the $q^{th}$ component.
          </p>
          <p><dfn><abbr title="occasions factor matrix" id="Ckr">$C_{K\\_R}:$</abbr></dfn> $(K\\times R)$ columnwise
          orthonormal component weights matrix for occasions where each $c_{k\\_r}$ entry is the weight
          associated with the $k^{th}$ occasion on the $r^{th}$ component.</p>
          <p><dfn><abbr title="right-hand kronecker product" id="CkronB">$(C_{K\\_R}\\bigotimes B_{J\\_Q})$:
          </abbr></dfn> $(JK\\times QR)$ block matrix. Right-hand Kronecker product of $C_{K\\_R}$ and
          $B_{J\\_Q}$ matrices where each $(J\\times Q)$ block entry is a scalar product of the form
          $c_{k\\_r}B_{J\\_Q}$.</p>
          <p><dfn><abbr title="right-hand kronecker product" id="XGJK">$\\overline{X}_{G\\_J\\_K}:$</abbr></dfn>
          $(G\\times J\\times K)$ three-way centroids tensor, where $x_{g\\_j\\_k}$ is the centroid value
          of the $j^{th}$ variable obtained on the $g^{th}$ cluster at the $k^{th}$ occasion. </p>
          <p><dfn><abbr title="mode-1 matricized centroid tensor" id="Xgjk">$\\overline{X}_{G\\_JK}:$</abbr></dfn>
          $(G\\times JK)$ centroids matrix. Thus, matricized version of the centroid three-way array
          $\\overline{X}_{G\\_J\\_K}$, with frontal slabs next to each other, defined by
          $\\overline{X}_{G\\_JK}=\\left({U_{I\\_G}}'\\cdot U_{I\\_G}\\right)^{-1}\\cdot {U_{I\\_G}}'\\cdot X_{I\\_JK}$
          </p>
          <p><dfn><abbr title="mode-2 matricized centroid tensor" id="Xjkg">$\\overline{X}_{J\\_KG}:$</abbr></dfn>
          $(J\\times KG)$ centroids-based $\\overline{X}_{G\\_J\\_K}$ permuted matrix. Thus, the array in which the first mode now
          refers to the variables, the second mode to the occasions, and the third mode to the clusters.
          </p>
          <p><dfn><abbr title="mode-3 matricized centroid tensor" id="Xkgj">$\\overline{X}_{K\\_GJ}:$</abbr></dfn>
          $(J\\times KG)$ centroids-based $\\overline{X}_{G\\_J\\_K}$ permuted matrix. Thus, the array in which the first mode now
          refers to the variables, the second mode to the occasions, and the third mode to the clusters.
          </p>
          <p><dfn><abbr title="component score matrix" id="Yiqr">$Y_{I\\_QR}:$</abbr></dfn>
          $(I\\times QR)$ component score data matrix where $y_{i\\_qr}$ is the value of the $i^{th}$ unit for the
          $q^{th}$ variable component and $r^{th}$ occasion component, given by
          $Y_{I\\_QR}=X_{I\\_JK} \\cdot (C_{K\\_R}\\bigotimes B_{J\\_Q})$.
          </p>
          <p><dfn><abbr title="core centroids tensor" id="YGQR">$\\overline{Y}_{G\\_Q\\_R}:$</abbr></dfn>
          $(G\\times Q\\times R)$ three-way core centroid arrays, where $y_{g\\_q\\_r}$ is the centroid value of the
          $q^{th}$ variable component observed on the $g^{th}$ object obtained at the $r^{th}$ occasion component.
          </p>
          <p><dfn><abbr title="centroid matrix in the reduced space" id="Yqqr">$\\overline{Y}_{G\\_QR}:$</abbr></dfn>
          $(G\\times QR)$ unit centroid matrix in the reduced space. Thus, matricized version of the core centroid
          arrays $\\overline{Y}_{G\\_Q\\_R}$, defined as
          $\\overline{Y}_{G\\_QR}=\\left({U_{I\\_G}}'\\cdot U_{I\\_G}\\right)^{-1}\\cdot {U_{I\\_G}}'\\cdot Y_{I\\_QR}$
          or $\\overline{Y}_{G\\_QR}=X_{G\\_JK}\\cdot (C_{K\\_R}\\bigotimes B_{J\\_Q})$
          </p>
          <p><dfn><abbr title="unit centroid-based component scores matrix" id="Ziqr">$Z_{I\\_QR}:$</abbr></dfn>
          $(I\\times QR)$ unit centroid-based component scores matrix where each unit is identified by the
          corresponding centroid in the reduced space, given by $Z_{I\\_QR}=U_{I\\_G}\\cdot \\overline{Y}_{G\\_QR}$
          </p>
          <p><dfn><abbr title="unit centroid-based data matrix" id="Zijk">$Z_{I\\_JK}:$</abbr></dfn>
          $(I\\times JK)$ unit centroid-based data matrix where each unit is identified by the corresponding centroid,
          i.e., each unit is projected into the space defined by the $G$ clusters, given by
          $Z_{I\\_JK}=Z_{I\\_QR} \\cdot\\left(C_{K\\_R}\\bigotimes B_{J\\_Q}\\right)'$
          </p>
          <p><dfn><abbr title="residual terms three-mode tensor" id="EIJK">$E_{I\\_J\\_K}:$</abbr></dfn>
          $(I\\times J\\times K)$ three-mode arrays of residual terms.
          </p>
          <p><dfn><abbr title="component scores residual terms three-mode tensor" id="EIQR">$E_{I\\_Q\\_R}:$</abbr></dfn>
          $(I\\times Q\\times R)$ three-mode tensor of residual terms for the $I$ component scores.
          </p>
          <p><dfn><abbr title="clustering residual terms three-mode tensor" id="EGJK">$E_{G\\_J\\_K}:$</abbr></dfn>
          $(G\\times J\\times K)$ three-mode tensor of residual terms for the $G$ clusters.
          </p>
          <p><dfn><abbr title="residual terms matrix in full space" id="Eijk">$E_{I\\_JK}:$</abbr></dfn>
          $(I\\times JK)$ reconstruction error matrix (residual terms) matrix $[E_{..1},E_{..2},\\dots,E_{..K}]$. Thus,
          the matricized version of $E_{I\\_J\\_K}$ with frontal slabs next to each other, defined as
          $E_{I\\_JK}=E_{I\\_JK}-Z_{I\\_JK}$.
          </p>
          <p><dfn><abbr title="residual terms matrix of component scores" id="Eiqr">$E_{I\\_QR}:$</abbr></dfn>
          $(I\\times QR)$ mode-1 matricized version of $E_{I\\_Q\\_R}$, residual terms tensor with frontal slabs next to each
          other, defined as $E_{I\\_QR}=Y_{I\\_QR}-Z_{I\\_QR}$.
          </p>
          <p><dfn><abbr title="residual terms of centroids in full space" id="Egjk">$E_{G\\_JK}:$</abbr></dfn>
          $(G\\times JK)$ mode-1 matricized residual terms tensor of centroids $E_{G\\_J\\_K}$ with frontal slabs next
          to each other, defined by
          $E_{G\\_JK}=X_{G\\_JK}-\\overline{Y}_{G\\_QR}\\cdot \\left(C_{K\\_R}\\bigotimes B_{J\\_Q}\\right)'$
          </p>
          <p><dfn><abbr title="ct3clus hyperparameter" id="alpha">$\\alpha:$</abbr></dfn>
          a hyper-parameter in [0,1] for the CT3Clus model. CT3Clus coincides with 3FKMeans for $\\alpha=1$
          and T3Clus for $\\alpha=0$.
          </p>
          `,
        ]
      },
      {
        "long_name": "tensor unfolding & folding",
        "short_name": "unfolding & folding",
        "description": [
          `<p>
            Measurements organized through a three-mode tensor $X_{I\\_J\\_K}$ are
            Let $X_{I\\_J\\_K} \\in F^{I\\times J\\times K}$ be a three-mode dataset interpreted as values corresponding
            to $J$ variables, observed on a set of $I$ units on $K$ different occasions (different times, places, etc.).
            Where $F$ is either $\\mathbb{R}$ or $\\mathbb{C}$. Now, we wish to reduce $X_{I\\_J\\_K}$ into a reduced
            space $\\overline{Y}_{G\\_Q\\_R}$ $\\in F^{G\\times Q\\times R}$, along with factor matrices $U_{I\\_G}$,
            $B_{J\\_Q}$ and $C_{K\\_R}$ where $G,Q,R$  are the dimensions of the tensor $\\overline{Y}_{G\\_Q\\_R}$ in
            the reduced space.
          </p>
          `,

          `<p>Given the $X_{I\\_J\\_K}$ tensor data arrays considered above, $X_{I\\_J\\_1}$ is the frontal slab located at the first occasion; an
          $(I\\times J)$ matrix. When we align these $K$ slabs side by side next to each other, we have a matrix of size $(I\\times JK)$.
          We refer to this as the <b>mode-1</b> matricization of the tensor $X_{I\\_J\\_K}$, represented as $X_{I\\_JK}$.
          Like mode-1, for the <b>mode-2</b> matricization, we stack the transpose of the frontal slab matrices side by side in a
          row-alternating manner. Now, since there are $K$ occasions, the mode-2 matricization results in a matrix of size $(J\\times IK)$, represented as $X_{J\\_KI}$.
          The <b>mode-3</b> matricization can be considered tensor vectorization. First, each frontal slab (e.g. $X_{I\\_J\\_1}$
          being the first frontal slab) is vectorized into a one-dimensional array of size $(1\\times IJ)$. Then, the $K$ vectorized frontal
          slabs are stacked (vertically) to obtain a $K\\times IJ$  matrix $X_{K\\_IJ}$. An example illustrating these transformations is illustrated below.</p>`
        ]
      },
      {
        "long_name": "Tucker3 Decomposition",
        "short_name": "tucker3 decomposition",
        "description": ["Lorem uctor, metus eu ultricies vulputate, sapien"]
      },
      {
        "long_name": "Tucker2 Decomposition",
        "short_name": "tucker2 decomposition",
        "description": ["Lorem uctor, metus eu ultricies vulputate, sapien nibh faucibus ligula,"]
      },
      {
        "long_name": "Tandem Clustering-Factorial Reduction",
        "short_name": "tandem models",
        "description": ["Lorem uctor, metus eu ultricies vulputate, sapien nibh faucibus ligula, eget"]
      },
      {
        "long_name": "Simultaneous Techniques Clustering-Factorial Reduction",
        "short_name": "simulataneous models",
        "description": [
          `Lorem uctor, metus eu ultricies vulputate, sapien nibh faucibus ligula, eget sollicitudinz`
        ]
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
    document.body.style.overflow = "hidden";
  }

  toggleOutline($drawer: any) {
    this.showOutline = !!$drawer._opened;
  }

  /**
   * listening for scroll event on sidenav-content.
   * position relative if header insight else, show float arrow buttons to toggle outline
   * @param $event
   */
  onContentScrolled($event: Event) {
    const curr_scrollBar_pos = (<any>$event.target)['scrollTop']
    const toggleButtonRow = (<HTMLDivElement>document.getElementById('toggleButtonRow'))

    // remove the toggle texts when out of sight leaving only arrows
    var eles = toggleButtonRow.getElementsByClassName("toggleText")

    //offset size set to 50. Insight
    if (curr_scrollBar_pos > 50){
      toggleButtonRow.style.position = 'sticky'
      toggleButtonRow.style.top = "0"
      // remove the toggle texts when out of sight leaving only arrows
      for (var i = 0; i < eles.length; i++ ) {
          (<HTMLSpanElement>eles[i]).style.display = "none";
      }
    }
    else{ //out of sight
      toggleButtonRow.style.position = 'relative'
      // remove the toggle texts when out of sight leaving only arrows
      for (var i = 0; i < eles.length; i++ ) {
          (<HTMLSpanElement>eles[i]).style.display = "inline";
      }
    }
  }

  /**
   * capitalize first letter of each word in a sentence
   * @param sentence
   */
  capitalize(sentence : string) {
    return Capitalize(sentence||"")
  }

  getDescriptions(index: number) {
    return this.data.main_content[index].description.join('')
  }

  getAimObjectives(type: string){
    if (type === 'aim'){
      return this.data.aim_objectives.aim
    }else{
      return this.data.aim_objectives.objectives
    }
  }

  changeScroll(itemElement: number) {
    const content_div = document.querySelector('.sidenav_content')
    const goto_section = document.querySelector('#section_'+itemElement)

    if (goto_section !== null && content_div !== null) {
      const pos = goto_section.getBoundingClientRect()
      var new_pos = <DOMRect>{
        bottom: pos.bottom,
        height: pos.height,
        left: pos.left-500, //decrease to push to left below 430. increase to mantain separation
        right: pos.right,
        top: pos.top-70, //decrease to move further up. increase to drop
        width: pos.width,
        x: pos.x,
        y: pos.y
      }
      content_div.scrollBy(new_pos)
    }
  }
}
