import React from "react";
import jsPDF from "jspdf";
import { User } from "../features/auth/authType";
import { BookType } from "../api/bookApi";


interface GeneratePDFProps {
    cart: BookType[];
    user: User | null;
}

const GeneratePDF: React.FC<GeneratePDFProps> = ({ cart, user }) => {

    // This centers the image at the top
    const generatePDF = () => {
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.width;
        const imageWidth = 24;  // The width of the image
        const imageHeight = 24; // The height of the image
        const xPos = (pageWidth - imageWidth) - 4; // This centers the image horizontally

        const libraryLogo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAADuCAYAAABxszjyAAAY2ElEQVR4nO2de7RdRX3HP4EkJDGQBAgoUE0ybEGFVkURUQEBtVoQQUFqdRY+iq0FXaL4qq34qKKlIFWoWp97oUsoBWwUH+AL5SGQaK0SZLJ5yCuGQBLI+8HtH7MP9+bec+7ee/bMfp3fZ62zknvP3jO/c+5892/mNzO/mTIyMoIgCMXYqW4DBKGNiHAEwQERjiA4IMIRBAdEOILggAhHEBwQ4QiCAyIcQXBAhCMIDohwBMGBqZO9abSaAjwT2B9YCMwBZgK7AtOAuQ51bgceBTYBG4F1wMPAncDtUZzcU7RAo9WzUvvmA3ulNs5I396V0c85AqzpU8TW1I4ej6Z2bk5/vzb93SPAPVGcbC1o3yLgGGA/YF762mXA5Y+n9fXYkNrwELAKuC2Kk98UqV/wz5RBa9WMVqcAHwMOqNQiuA54bxQnt0x2kdFqFnAmcAa2QVbFBuDbwDuiONk82YVGq52B84F3erbhI1GcfMxzmUIB+nbVjFYfBy6letEAHAHcYLQ6MeO6C4BzqVY0ALOAtwCn5bj24/gXDcA/Ga0WBChXyMmgMU4dghnLVEDluKZOXjjZm2M8YgimAqcGKlvIQZuDA1Nqrn/fjPf3A2YHrP/FAcsWMhDhuDMn4/2Zges/LA3eCDUgwnEnSzjrMt4vyx7YaKdQA20WTt1kCWdtxvs+OKSCOoQ+tFk4Tfc4a4BtgW04MHD5wgBEOO4MmsAEIIqTbcCDgW0Q4dREm4VTN1OMVlnf3x8D2yDCqYk2C6dujwPZc0mFlw8V5IB0dYJQMSKccmQJJ7THmQE8NXAdQh/aLJwmkPW0Dy0cgGdUUIcwjjYLRzyOpe7lUUOJCKccIpwhpc3CaQJZXbW7K7BBumo10GbhNN7jRHHyGLAysA3icWqgzcJpAnm2NpjANuxttJoXuA5hHG0WThM8Th5CCwfE61SOCKcceWyoQjiygqBiRDjhEY/TQdosnCbQFI8jwqmYNgunLR5nOTYtVUikq1YxIpxyZNoQxck6YEVgO/Y3Wk0LXIcwhjYLpwnkFW/o7to0bEJGoSLaLJwmeJy8SGStY5TJTfZu4BeO956GzcAZmkOxKWVduITsxpj3wbPc0YYiHAj8TwX1CJQTThLFyRKXG41WrytRb488HmdpFCfbXQo3Wm1wuW9QcR7LGoRE1iqkrq6aS7L28UhXbUekq1YhbRZOEyjSVZOQdIeoSzg+FiW2xuNEcbKB8CHp3Y1W8wPXIaS02eO0RjgpVQUIhAoIlvHfaDUdeFL641xsQ5+FzUe2V6h6K6bIg2c58JJQhqQciHukUyhAGeGcb7Q6F5tpZSdGM1vOxk7IhSaPx7nD6KzTQgaSdRpBXht6JK6GFEAiaxVRRjh1J/zO02gXNcCGHlV01UQ4FSErB8pRtKsWGhnjVESbhdMEioi3irmchUarSXNaC35os3Ba5XGiOHkUe3J0SHam/i70UCDCKUdRG6rorj29gjqGnjYLpwkU/f4kQNAR2iycJnicot+fhKQ7gginHE3sqolwKqDNwmkC0lUbUtosHPE4/dndaLVnBfUMNSKcchT6/qI4eRhYHciWsYjXCUybhdMEXL4/CRB0gDYLpwkex8UGGed0ABFOOVy+PxFOB2izcJqAi3ilq9YB2iwc8TiDWWS0CrZJURDhlKWpwpmOZPYMSpuF0wQKizeKkxXAYwFsGY8s9gxIm4XTVo8DMs5pPSKccrjaIJG1liMDyHK4PnhEOI6k2ZP2AvYD9sQmidkt/Xdu+u/7042DwWizcJrgcVyz+UhXLYM0ueKzgYOAZwEHAwvIl1rsduDCYMYhwimLq3Cq8DhPNlrNieJkbQV1lcZotS/wUmzuuZdgE4+4/o3fabT6vGvC/Ty0WThNYLrjfVUIB6zXubmiugpjtHo28GrgBOC5HoteBBwL/NBjmTvQZuG02ePcD2wEZnq0pR+NE47RahGg01fIuaaTEOH0pQnCcfI4UZyMGK0SbP89JI2Yy0lTVp0KvBk4gmr+di8OWXibhdMEXLtqYAMEoYVTa4DAaLUH8PfY0/f2rrj6yGg1PYqTLSEKF+GUo4xwOhuSTgf6H8R6mFl12IDtRu8H3Bmi8DYLpwmTt7uVuLcK4URGq52iOHE9B7UQRqvdgfcB7yT8+C0PPs5h6kubhdMEdi9xbxXCmQn8GXBPyErSScmzgA8wempFExDhBGILsBi4DngQ2Ip18bsBu2K/+PnY/vl87OTbQka7aGWSYlQZkg4mHKPVUcDFwDNC1dGrCrgJuBE7bjo4xz3BuoltFk7ZyMx3gPdGcVKoAaf7XBZiZ7NnlKj/XmAz9qCtkBwA/Mh3oWkmnfOwYeUQUbL/BX4A3ADcGMXJE3m3jVavJJ9wgrXvYRTOGuCtUZxc4XJzFCfbsE+/UqcPRHGy3Wh1J+Gf1N5D0karo4GYfIdv5WUT8FNsD+B7UZz8cZJrH8lZZrADztosHBe2Ai+P4uSWug1JWU544Xg7vcBotRNwDvCP+AnOjADXAl8Crk4PGc7D+pzXicfpg4vH+VqDRAPVLPb0Ihyj1WyslznRQ3FrgMuAC6M4uc3h/m05rws20TpswvmWdyvKUcVhUwuMVtOiONnqWoDRah/seCPPuGIyfg+cC1wexcmmEuUEmdQswjAJZwRYEsKQElThcaYCT8Mxime0ehq2O1XGc90DfBL4iqcVy84PAV8Mk3DujeJkXRBL3KkqJB251GW0OhC4BjsD78JK4Hzgs1GcbHYsox/icSrk9roN6MM9jM4dhSQCvl/kBqPVc7Cri+c71LcF+BTw6ShONjrcn4V4nArpu2bJaDUXeBXwfOw+jr0ZzUKzCjsxei92K4AB7ojiJG9UZ1KiONlmtLqL8KuYC3WzjFaHA9/DbkUuys3A26I4+T+He/MiHqcERcOhg04JOBb4ZpGCjFb3AcuAW9PXkihOXGfnl9Mg4RitDsV6mtkF69gA/DO2WxZs52VK3qgaAEarediw/0Jst3M/7ANyNnZ1wfjP+p9RnHxxsjLbLJyi+NxC3PvyX9b7hdHqIUaFdCtwaxQnD+Qoq5LFnnkuMlo9HfguxUWzFHh90VUYJci7aPXDRqtPA/sULP/qrAvaLJyiwYE1QawYZT7wyvQFgNHqQeCX2KjUNVGc3NXnvioia5khaaPVU3Ab03wL+NsCk5c+GMl5neu2isy2NUzCqSNpxVOAk9MXRqvl2PmQq4GfpQPnKuZypmIzxPSty2i1W2rTggJlbgXeE8XJ58oa50DobRKdFk5RmpDtZX/sbsgzgI1Gq59hF3pWVfcE4aTbmq/EpmLKy0rg5ChOrvNkW1HyehxXMsfPwyScKrsSeZjJmG5dBQwKEFwMHF2gnLuBl1U4numHeJwSFO2q1R7CrJlF439htHob8JYCZdwOHBvFyf3erHIjtMdxFk4TMshkfTkinGIsGPuD0epgoMj45E7gmJyRwtDU7nEG9eVCK7oOap9trpkFvf+km/G+Sv6NeA9gPU0TRAMNGOM0IeGFK1V7nF8D95Uso04WjPn/WcDzct63Hjh+QCi9Lmr3OG0e4xSlrMc5N4qTy9LUR4cChwEvAA6h+IRhHcxNlxftDnwk5z0jwJuiOFkaziwn8nqclcD4hb37kr1dvdPCqWWMkw6Mr0xfGK12xuY9PhI4CpswvEzaqJAsxC6+zJvE4vwoTq4MaI8reT3Oe6I4uWTsL4xWS4HnZNzXaeEUJcgYJ12XdUv6Om+ckI7Fiil0Qo68nI+1Jw+3Ah8KZ0opGhtV6yKVBAf6CGkWcAxwXPoqum7KJ0flvG4bcHqo9LEeaKxwmhBV8x2ODr1ity/pGq7FwOI02cXzsUdbnEqfuZWG8JkoTn5dtxGTEDo4ICsHxlD7wyBNRfur9PWPRqtDgNOBv8YmQGwCD2HzAjSZ2v+WwxSOriR/chGiOFkSxcnbsd23MwiUILwgn4jipIrj5MtQu8dps3CKUvtTahBRnKyL4uQi7Ia2U7H7W+pgBTbHWdNp7BinDbTe44wnDSxcClxqtDoeGwXzllAwBxeUTNtUFbULRzxOQ4niZDE2P/VZ5E/5WoZ1wBcqqMcHje2qtaqR5aTxHmc8UZxsieLkAux++dATkZdHcfJo4Dp8UXv7bLLH8R2Orv3LdiWKk5VRnJyEPeEs1Ia8bwQqNwSN9ThdpLXC6RHFydexqxJ+57nox7C5EdpC7Ys82yyczgUH8hDFyZ3AC4GrPBZ7fXp8SVuQ4ECFtN7j9EhT+b4WuMhTkdd7KqcqpKtWFVUdIFsV6ec5E5szoCxVZNrpFG0WTpGuWme8zViiOBnBiudrJYu6u7w1nULC0Sld+zxPkHqe04FflCimSbs7m0CnxzhD73F6pAP7U7AJ4ovyOHZhpzBKq4Xjs7F3anzTjyhOVgCnOdz6WNrlE0bpdHBAPM44ojj5EXB5wduakOG0dbRZOEXovMcZw1nkP5UZoC3LbKqk0x6nCEPhcQCiOLkX+HyBW5q+96YOOp2QsEhXbZg8DsB5TEyLNIg2bCOomlYHB3zShgeBN6I4WUX+DWltWmpTFZ0WjgQHJudfgTwH1w57auB+dFo4RRi2rlovPH1HjkvF40yk1cEBn15iGD1OXsTjTKTTHkeCA36oJd9cw5G1aild+zw+6bJwgj0wxeMITThELBSuf/dWj3F8Ih5nMF0Wjqs37fQYpwginOHE1eN0WjjSVfNDlz3OUApHwtHVIMKZSKuFk4WsHPBDl4VT+Rinaw2ta59HyId4nD6Ix/GDeJyJdFo4RRDhDKbLwpEJ0JJIVG04ka5aH6Sr5ocuexwJDpSka5/HJ10WTuUepwkNzecxH034PE1FhDORVgvH57ikCZ9HqJ5gK78HCacJg2lJSFgN4nEm0mmPI101P4hwJuJ86nSeCi8CflvInFFOAF6VcY2sVRPKEiyqVkY4P0xPRi6M0eqpZAtHxjjVIB5nIp3uqhWxsQmfp6mIcCbiLJwmDKazGnsRG0U4g2njJPiTcl4XLPXVoK5aExpaljCKCKcJD4Km0miPY7SaChwCvAQ4Ang+8OSct7um9w06xgmNT+E04UHQVBolHKPVdOAw4EisWF4IzHYsbiiFI121aqhdOEarmcBxwGuwQaO5noquXDh5Gtr7jVZvKmbPExyU4xrxONVQm3CMVocBbwZeD8wJUEUjPc6LitlSGBFONVQqHKPVTsBfAR8ADg9cXbAjTJocHPDZVWtC17OpVBJVM1rtDLwR+AiwsIIqN6YncrvQ6jGOeJxqCO5xjFbHYY8dOTB0XWNYWeJeEU6KCGcwwYRjtNoHOBdwHQuXweXo+twMS1etCZ+nqXgXjtFqGvAu4BzyT1b6YhPwPeCTJcrI7L6KxxG8Csdo9WLgYuBgn+VOwirgRuB64Abg1ihO8pxEV4omexxZOVANXoRjtJqB9TBnEy7gsBb4HbBkzOu2KE58t9dWj3F8dtW6fAZMWUo3cqPV84BLgAPKm7MDq4GfANcC10Zxstxz+YMIOgEamixhFBGDHNc3mFIex2j1DuB8YBc/5rAM+DbwA2BJFCd1PPRa7XGybCjSj91cxpCO4yScdJnMl4E3eLDhXqxYvhXFyW88lFeWVnucLBuKCGdLGUM6TmHhGK32Ar6DXYxZhp8A52E3RTbhYZ2bQcJpwpggSzgbCpQlXbXBFBKO0Wp/4Gogcqzv8fT+T0Rx8ivHMkLj7HGCbQAqQFZjF4/jh9zCMVodCVwB7O5Y11XA2RUO8l1xFk4TxgRZC/SKeBwRzmByCcdodTIQAzMc6lgGnBXFyQ8c7m0kg4TThIaWJd6qPc4JRquxixNHsOHS3utBYHkUJ0347oqQGY42Wv0ddlKz6HhoPfA+4ItVRMfSFQsLgacC87D7enZjx3a+d46inD1OE/74WcIp4nF8eNA3kB1B2mq0+gPwe2zqrJuB66uYyS7BpI2khGhuAd4YxckdroZNhtFqEXAodlv1M7FjroUMbtNF6LRwijTGh8sYUoBp2E16B2E3ZwFsNlrdBPwU+DFwUxQnTRhD9hjYSIxWb6e4aLZjF3Z+NIoTL0GZ1JMcBhwNvACbd2BPH2UPoNVjnCzxri9Q1uoyhpRkF+z++SOxS1IeNlpdCVwO/MRX4ypB30ZitDod+I9B7w9gDXBKFCfXlDHIaDUF+AvgmPR1BNUuFnUWzjrPhriwNuP9VQXKqsrj5GEP4G3p62Gj1VXY5So/D7DmKg8TxjjplvgvUEw0dwLHRXGyzMUIo9UuwEuxWV6PB/Z1KccTzsJZ49mQojxOtnBWFCivScIZyx7AW9PXH4xWXwK+EcVJlfbu0EjSkPOXx/8+g+uBE6M4eahIxUar2cCrsUk6/hLYtcj9ddJU4azOMZP8QIHymiqcsRwA/BvwL0ary4HPRXFycwX1PiGQNDXxFcD0AvcvBk6O4iRX9z4dr7wcG2g5ger36+TB2eP8ybMhRbkvxzUGO0k6LeO6ESBIZCcQM7B7899otLoW+GQUJz8NWN8UeCInwCUUm9xcDLwuTwg+XUF9GjZoEnJg7wM34URxstJo9RAw37tJ+bgh64IoTjYbrZYBf55x6R1RnNTtQV05FjjWaPVr4FPA5QH3npyNTQCYl+9jPc1A0aR7dI7H7gYNnRXJJ6UOz73YoyFFuAvbSPJwVY5rvl3ClqbwHOAy4JdGq0M9lz3FaHUgNvtMXr4LvGZQ98xodbDR6mJsz+Uy2iUaKNFVI4qTc4xWi7GTTAcA+2D7o9Oxg7jx987LqGszO05abgceTX+/HjtmWQpcEcVJ3lDzZ7GZH5+HXaKzChvGnoPtov0Im11lMr4PqAHv9T7ndOxn3xXYC+uJ9wSeBixIX76yT07G4cBNRqtvAh+M4iRPlzaLqcBXyL+U5joGeBqj1VHA+4FXUF2+tvXA/disNn/CruBYmf67ltF2Brb9bca2jcl6IZlTBFNGRpqwg6D9GK3mYWewDxrzOoRwkaIN2InGcwfNBRmtfoOdD/HFb4Ejx3Z90wSDJ2KX1vj2hmNZDdyWvpZhV2csi+Lk3oB1DkSEE5B0wP0MbIM6HDvz7TsZ31JAR3Hy+z71+xTOXcCLojh5MC17F2zap7OBp3uqo8fjWGFc33tFcXKX5zpKIcKpmHSN1dHYLuYrgFkeit0EfBi4YGwY36NwVmFFc4fRalfg7cC7sd13H2zHrm37MTYwdEPTAzoinBoxWs3Czmm8FjiJ8iL6GfCGMV7Bh3Aex54ksBQ4E3gH2ePZPDwI/BCbW+CaKE4e8VBmZYhwGoLRag5wKnA68NwSRa0ATo3i5OeehPM74A/YGf6sObMs7sOu0fsv4Maalhh5QYTTMNIFjscDHwWe7VjMNuBD2InUrHmu0KwGvomdFrixbbkFBiHCaSipgE4CPo4NMLgwQj3n34wAP8euefvvKE6CHbdRFyKchpNGr87BRq92rteaTDYCXwMuDLWBrSmIcFqC0eoFwNep9qiMvKzCTqJe2AtMdB0RTotIkwBehD3+rwmsAT4D/HuB1R6dQITTQoxW78Kmna3kNLU+bMF6vw8X3YPTFUQ4LcVodQrwDdzSNZVhMXBGFCd/rLjeRiHCaTFGqyOwE4gzK6jufuDMKE6urKCuxlOXqxc8EMXJdcAphM+8einwTBHNKOJxOoDR6m+wWTZ9Pwg3AR+I4uRCz+W2HhFORzBavQ/4tMci/wS8KoqTpR7L7AwinA5htPoqfkLVdwOv6PokZhlkjNMt/gG4tWQZt5NuIfBgT2cRj9MxjFb7YPe2uOyVSbA7PO/3a1X3EOF0kPTI9K9TbIHnauCkYZ+fyYsIRxAc6Jvlxmi1GzbxxGzsOGhO+tZc7FOsX5abHjtjzyQZRNb7eejZUQdzaO/YcCvV5gXfRLFTJVwY/5n6ZbBZy46HMa9nNKn/pvTntcBjwN15EiwOavyvpBv5yAShKNuMVodFcbJksosGPTn3C2CQILSBqdiMRJMySDiz/doiCK3iyVkXDBJOFYsGBaGpZJ4TOkg4PnJ9CUJbyUxnPEg4u3g2RBDaRGZuh0HC8XFyryC0lcz2P0g4Tc+mIgghcRaOeBxhmBGPIwgOiMcRBAdEOILggHTVBMGBzFMZxOMIwkSkqyYIDjgLp637TQTBB84rB2RbqDDMZCZ4FOEIwkREOILggAhHEBxwFk4nDjgVBEfE4wiCAyIcQXBAhCMIDsgYRxAcEOEIggPbsy4YJJzMFKCC0GG2Zl0wSDibPBsiCG1iddYFIhxBmMiKrAsGCedRz4YIQptwFs4y4BG/tghC49kGPABcl3XhpAdLGa2mA08CZmDzSU/DJmSfQv80of3OrdmNifsbZjNxe+rMtB4Xenb5YJ6ncvp9xqpYR44Bbo3lPUaOkO8Yxp5n02MjE4cU/c7j2ZLeP5beGKZnxwZgcxQnmWObHnIimyA4IDs9BcEBEY4gOCDCEQQHRDiC4IAIRxAcEOEIggMiHEFwQIQjCA78P359YKQB648FAAAAAElFTkSuQmCC';

        // Insert Library Logo
        doc.addImage(libraryLogo, "PNG", xPos, 15, imageWidth, imageHeight);
        // Library Information
        let yPosition = 20;
        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.text("BookBary Library", 10, yPosition);
        doc.setFontSize(10);
        doc.text("123, Dewas, Kataphod, 455440", 10, yPosition + 5);
        doc.text("Phone: 992-662-25429 | Email: raje@bookbary.com", 10, yPosition + 10);
        doc.textWithLink("www.bookbary.com", 10, yPosition + 15, {
            url: "https://rajendrapancholi.vercel.app/",
            target: "_blank",
            color: 0x0000FF,
            underline: true,
        });

        yPosition += 20;
        // User Information Section
        doc.setFont("helvetica", "normal");
        doc.text("User Information:", 10, yPosition + 5);
        doc.text(`Name: ${user?.name}`, 10, yPosition + 10);
        doc.text(`Email: ${user?.email}`, 10, yPosition + 15);
        doc.text(`User id: ${user?.id}`, 10, yPosition + 20);

        // Book List Table Header
        yPosition += 30;
        doc.setFontSize(12);
        doc.text("BOOK ID", 10, yPosition);
        doc.text("BOOK TITLE", 30, yPosition);
        doc.text("EDITION", 100, yPosition);
        doc.text("PRICE", 160, yPosition);
        yPosition += 5;
        doc.line(10, yPosition, 200, yPosition); // Line after header

        // Book List Table Rows
        cart.forEach((item) => {
            yPosition += 10;
            doc.text(String(item.bookId), 10, yPosition);
            doc.text(item.title, 30, yPosition);
            doc.text(item.edition, 100, yPosition);
            doc.text(Number(item.price).toFixed(2), 160, yPosition);
        });

        // Total Section
        yPosition += 5;
        doc.line(10, yPosition, 200, yPosition); // Line before total
        yPosition += 5;
        doc.text("Total: Rs " + cart.reduce((total, item) => total + Number(item.price), 0).toFixed(2), 10, yPosition);

        yPosition += 35;

        // Signature and Seal Section
        doc.text("Authorized Signature: .......................", 10, yPosition);
        yPosition += 10;
        doc.text("Library Seal: .....................................", 10, yPosition);

        // Footer Section with Terms (Optional)
        yPosition += 20;
        doc.setFontSize(8);

        // Save PDF
        doc.save("book_bill.pdf");
    };

    return (
        <div className="mt-4">
            <button
                onClick={generatePDF}
                className="px-6 py-3 font-semibold rounded-lg shadow-lg transition-all bg-gradient-btn active:scale-95 cursor-pointer"
            >
                Download PDF Bill
            </button>
        </div>
    );
};

export default GeneratePDF;
