<template>
  <div class="home">
    <Row type="flex" justify="space-around">
      <Col v-for="item in 8" :key="item" span="11">
        <div class="card">
          <a @click="info()">
            <div class="card-image">
              <img src="http://demo.jb51.net/js/2016/CSS3_kapian/img/2.jpg"
                   alt="Orange" />
            </div>
            <div class="card-body">
              <div class="card-date">
                <time>
                  20 Novembre 1992
                </time>
              </div>
              <div class="card-title">
                <h3>
                  Lorem Ipsum
                </h3>
              </div>
              <div class="card-exceprt">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptatibus
                  autem consectetur voluptate facere at, omnis ab optio placeat officiis!
                  Animi modi harum enim quia veniam consectetur unde autem inventore.
                </p>
              </div>
            </div>
          </a>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "Home",
  methods: {
    info() {
      this.$router.push({path: '/article/info', query: {id: 123}})
    }
  }
};
</script>
<style lang="less" scoped>
  .card {
    width:100%;
    min-width: 200px;
    margin:10px auto;
    background-color:white;
    box-shadow:0px 5px 20px #999;
  }
  .card a {
    color:#333;
    text-decoration:none;
  }
  .card:hover .card-image img {
    width:160%;
    filter:grayscale(0);
  }

  .card-image {
    height:250px;
    position:relative;
    overflow:hidden;
  }
  .card-image img {
    width:150%;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    filter:grayscale(1);
    transition-property:width,filter;
    transition-duration:.3s;
    transition-timing-function:ease;
  }

  .card-body {
    text-align:center;
    padding: 15px 20px;
    box-sizing: border-box;
  }

  .card-date {
    font-family: 'Source Sans Pro', sans-serif;
  }
  .card-title, .card-excerpt {
    font-family: 'Playfair Display', serif;
  }
  .card-date, .card-title {
    text-align:center;
    text-transform:uppercase;
    font-weight: bold;
  }
  .card-date, .card-excerpt {
    color: #777;
  }
</style>I
