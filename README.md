# demos


H5打开摄像头： 请在https下打开(设备需要有摄像头)



    this.$axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://www.toutiao.com/a6634459265446707720/"
      )
      .then(res => {
        let response = res.data.replace(/ *[\r|\n] */gm, "");
        let str = "";
        const scriptReg = /<script>.*?<\/script>/g;
        response.match(scriptReg, "").forEach((item, index) => {
          if (index == 4) {
            str = item;
          }
        });
        str = this.html_decode(this.delHtmlTag(str));
        console.log(str);

        eval(str);
        // console.log(BASE_DATA);
      })
      .catch(e => {
        console.log(e);
      });
  },
  methods: {
    getRandom(arr) {
      return Math.floor(Math.random() * arr.length);
    },
    html_decode(str) {
      var s = "";
      if (str.length == 0) return "";
      s = str.replace(/&amp;/g, "&");
      s = s.replace(/&lt;/g, "<");
      s = s.replace(/&gt;/g, ">");
      s = s.replace(/&nbsp;/g, " ");
      s = s.replace(/&#39;/g, "'");
      s = s.replace(/&quot;/g, '"');
      s = s.replace(/<br\/>/g, "\n");
      s = s.replace(/&#x3D;/g, "=");
      s = s.replace(".replace(//ig, '')", "");
      return s;
    },
    delHtmlTag(str) {
      return str.replace(/<[^>]+>/g, ""); //去掉所有的html标记
    }
