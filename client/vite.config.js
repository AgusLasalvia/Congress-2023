import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Quitel/",
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: ["./src/**/*.js", "./src/**/*.jsx"],
      exclude: [],
    }),
  ],
  server: {
    https:{
      cert:`
      MIIDiDCCAnCgAwIBAgIEXvMtGDANBgkqhkiG9w0BAQsFADBbMScwJQYDVQQDDB5SZWdlcnkgU2Vs
      Zi1TaWduZWQgQ2VydGlmaWNhdGUxIzAhBgNVBAoMGlJlZ2VyeSwgaHR0cHM6Ly9yZWdlcnkuY29t
      MQswCQYDVQQGEwJVQTAgFw0yMzA2MDMwMDAwMDBaGA8yMTIzMDYwMzA2MzczOVowSjEWMBQGA1UE
      AwwNcXVpdGVsMjMuc2l0ZTEjMCEGA1UECgwaUmVnZXJ5LCBodHRwczovL3JlZ2VyeS5jb20xCzAJ
      BgNVBAYTAlVBMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzekBJ+HhCP/AT8KnvEbz
      mWzPh5uCNkxNI7fQTIktCTzt1zxACBilsd33ofcE3MFUxbJZXYWR5pn5vjhPkWR3BQid9vBV4kIt
      h0KSx/ObPbsCDzvAranC/uditp6voCDEKu8Ayv+V8WBiZ2yKLCw+c9M5kEufy5ZEWo6TkSOPQifQ
      HJYH3V3BrbJBzio1umGzxYVFKgzRRK+5EqO2DWb1bwwhw4JCBQM+LxHt8WqziMPynfefdZgBvh+d
      sID3tSIdDzcX3aKACLElRiI66Z8ZnpnAljC29cnZfqKrQA3/JdRoYiVCTQlY0OXhtsz0D4F6qA9g
      pHBXYWyPRuGTvFkDYQIDAQABo2MwYTAPBgNVHRMBAf8EBTADAQH/MA4GA1UdDwEB/wQEAwIBhjAd
      BgNVHQ4EFgQUfZZ6giZDx618QufIar8Dpud7++QwHwYDVR0jBBgwFoAUfZZ6giZDx618QufIar8D
      pud7++QwDQYJKoZIhvcNAQELBQADggEBAJknMjlgm07++i66DENZkrOri0UsRQ4pHaVpyj2c8RiF
      iyY5x2OlkpojAD0d/OJbvOoENAYiYgRGcyjn8rPuqzmpAhGF9oSwa7cUu7eGfbfJa6jS8jSG3IIL
      RfN59WoGkAKlGdb8X0a40QiwPZk4yU13luk/NqB8t8Pjuwu+jfoyRl+uwCWhGN3rvwp3jic+Q0NT
      AOrZ5AdcU5UoZI0YGV+bSHvKuqMpm/9cNfbnzPKb2gFZBqmoLwh2HcFDo/oy/puxNDeIuQTeVdrD
      h4xg2s5ugmOl3mu2Bgyn1Fnv3bCOXxqU7Ckj8cwvo83toq+NWXFf/6VJs2xcDdSzZk0RwBU=
      `,
      key:`MIIEogIBAAKCAQEAzekBJ+HhCP/AT8KnvEbzmWzPh5uCNkxNI7fQTIktCTzt1zxA
      CBilsd33ofcE3MFUxbJZXYWR5pn5vjhPkWR3BQid9vBV4kIth0KSx/ObPbsCDzvA
      ranC/uditp6voCDEKu8Ayv+V8WBiZ2yKLCw+c9M5kEufy5ZEWo6TkSOPQifQHJYH
      3V3BrbJBzio1umGzxYVFKgzRRK+5EqO2DWb1bwwhw4JCBQM+LxHt8WqziMPynfef
      dZgBvh+dsID3tSIdDzcX3aKACLElRiI66Z8ZnpnAljC29cnZfqKrQA3/JdRoYiVC
      TQlY0OXhtsz0D4F6qA9gpHBXYWyPRuGTvFkDYQIDAQABAoIBAEDvxomJVqq73S5K
      ORPLXG96PUiK5lmxXnJxOaOpbyaGrItAWQE0pKyfT8UoXcQwxEdEo6I2yXhr/rLa
      l11GzbIssYR67trX+/u4Jwof7UlefJvJQE6ERxaUajElgkWBj9vqW9mpGORyfRYY
      yMp9eYSVjIXRE6fkz9GvPSJ8kGVQD4Ycik5MUVES1dahtiOCDDzY5z94Yo37v6iN
      2d9wXpbe5T4m2lfyWlKxAjRF0exCBddSToTJkfbF0sQ3r/xibzTDVDkfPnTlXf9h
      xD3cF01LuDEc4g0rgrCxlvZ4becB+AFCDyNrlqEMaZnMLhbTpvC9LI8yUFq6oSeU
      yvP3cLECgYEA++ZYX62JPQGlmTsxx/JQ/L7u6FOlstNHWxeQi46dZwtN+Ih7L+Vo
      nQv7xRNJpTUc4RVfP4gbRvgFtJK089iTYm4vj87Ov2q4pgNCvStuCCId8sYLLwOu
      0AYURJnuaCAvRlicX4aT2F2zcBl0SSY3jNL5i6EJabk8H1eF2RdcqMsCgYEA0UMF
      0HtBRlO1X5NsAhrNrvarUa9qUHRNZOnQf2ZVcltAkAYct0W+xPH+3MAavI0s3TJ7
      3Qpe9+iJql3tdKAhyMJkN+Nh88unTmZ/uZkgtDmcFshnfG0CBLZJPXnjFzPSoK8w
      Me4cZOUdAemTCIOzF3ILA+DiDb/VuLCCyfHM+wMCgYA45a+idN0h1YRlFxTId/hJ
      DouCGJq9yLE+ZxU0IJN3GfuTnqhMikHV70YAHroswdFzGdO40vJuVklbnyOWTJ4F
      xqOhlPHoFJ/+h5AEkJG67pHbK1aNWQScYjMjx60tAdAL0KoJfalZXtjQAj/c4e/8
      NA8/tbEdm0R0Q92synUYfwKBgGqKvDAcQOyke+iwb0JXETeugSUysWdK/4iMfsoO
      eRyjFyj846vwB6PQLdmIuVQccKYiKOwudpGzxDuIXPiO+wRy7IGD9IAixQjmqMr/
      CqaX2j/DQuUXvvpVMM7q+tL6YJfM+jXBrJU2DWHG4URpgUpDlxYfbhhf/lltDPny
      cVGvAoGATDsjID/N59A+q19AT6b2NMG/Dfuf68qIbUO2dZyHtjEqL2Krm1WxX1eq
      dbXEs+ShwTggWIZNZ46rv1YKLfbGamywVW/DYPTdnFvEuD5R6wFDhmmtPZ7keWoj
      XGbgbAsab0ap2bXTeT7S2cbd9Ag2TCSWXRPqSfyzRRHnaMgGICo=`
    },
    port: process.env.PORT,
    host: `0.0.0.0`,
  },
});
