export default function setCookie(name: any, data: any) {

    const domain = window.location.hostname
    const maxAge = 86400

    // secure;
    document.cookie = `${name}=${data}; domain=${domain}; max-age=${maxAge};`
}