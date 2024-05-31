$(function() {
    function t(t) { return t < 10 && (t = "0" + t), t }

    function e() {
        var t = new Date,
            e = t.getHours(),
            n = t.getMinutes(),
            o = t.getSeconds();
        n = r(n), o = r(o), document.getElementById("realtime").innerHTML = e + ":" + n + ":" + o, setTimeout(e, 500)
    }

    function r(t) { return t < 10 && (t = "0" + t), t }
    const n = "1906ccd7aa6d7c3683f1b293ee212f01",
        o = "sylhet",
        a = `https://api.openweathermap.org/data/2.5/weather?q=${o}&appid=${n}&units=metric`;
    $(window).on("load", function() { setTimeout(() => { $(".preloader-wrap").delay(500).fadeOut(1e3), s() }, 200), setTimeout(() => { $(".hero-sec .hero-footer-wrap.scroll-from-bottom").addClass("animated") }, 800) }), $("#realtime").length && e(), fetch(a).then(t => t.json()).then(t => {
        const e = t.main.temp,
            r = t.coord.lat,
            n = t.coord.lon,
            o = Math.floor(r),
            a = Math.floor((r - o) * 60),
            c = 60 * ((r - o) * 60 - a),
            i = Math.floor(n),
            l = Math.floor((n - i) * 60),
            u = 60 * ((n - i) * 60 - l);
        document.getElementById("coordinates").textContent = `${o}° ${a}' ${c.toFixed(4)}" N`
    }).catch(t => { console.log("Error fetching data:", t) }), $(document).on("click", ".header-wrap .header-right .theme-btn", function(t) { t.preventDefault(), $(".popup-menu-wrap").addClass("active") }), $(document).on("click", ".popup-menu-close-btn .icon", function() { $(".popup-menu-wrap").removeClass("active") }), window.addEventListener("scroll", { scroll_animations: s }), $(document).on("click", ".experience-box .experience-button-box .experience-button", function(t) { t.preventDefault(), $(".experience-popup").addClass("active") }), $(document).on("click", ".experience-popup .experience-popup-content-wrap .close-experience-popup-btn", function() { $(".experience-popup").removeClass("active") });
    const c = document.getElementById("ball");
    document.addEventListener("mousemove", function(t) { gsap.to(c, { duration: .3, x: t.clientX, y: t.clientY, opacity: 1, ease: "power2.out" }) });
    const i = document.querySelectorAll("a");
    i.forEach(function(t) { t.addEventListener("mouseenter", function() { c.classList.add("hovered"), gsap.to(c, { duration: .3, scale: 2, opacity: 0, ease: .1 }) }), t.addEventListener("mouseleave", function() { c.classList.remove("hovered"), gsap.to(c, { duration: .3, scale: 1, opacity: 1, ease: "power2.out" }) }) })
});

function s() {
    var t = { ease: .05, animation: "fade_from_bottom", once: !1 };
    gsap.utils.toArray(".scroll-animation").forEach(function(e) {
        var r = {},
            n = { duration: e.dataset.animationDuration || t.duration },
            o = { slide_up: { y: -180 }, slide_down: { y: 180 }, slide_up2: { y: -100 }, slide_down2: { y: 100 }, fade_from_bottom: { y: 180, opacity: 0 }, fade_from_top: { y: -180, opacity: 0 }, fade_from_left: { x: -180, opacity: 0 }, fade_from_right: { x: 180, opacity: 0 }, fade_in: { opacity: 0 }, rotate_up: { y: 180, rotation: 10, opacity: 0 }, bronx_zoom_out: { scale: 2 }, slide_and_scale: { scale: 1, opacity: 1 } },
            a = window.innerWidth > 809 ? "10%" : "30%",
            c = { scrollTrigger: { trigger: e, once: t.once, start: "top bottom+=" + a, toggleActions: "play none none reverse", markers: !1, onUpdate: function(t) {} } };
        "bronx_zoom_out" == e.dataset.animation && (c = { scrollTrigger: { trigger: e, once: t.once, start: "top bottom", toggleActions: "play none none reverse", markers: !1 } }), jQuery.extend(r, n), jQuery.extend(r, o[e.dataset.animation || t.animation]), jQuery.extend(r, c), gsap.from(e, r)
    })
}