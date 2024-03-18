// 从cookie中获取token的getToken方法
export function getToken(): string | null {
    const cookie = document.cookie;
    const tokenRegex = /token=([^;]+)/;
    const match = cookie.match(tokenRegex);
    return match ? match[1] : null;
}

// 获取当前用户信息的getInfo方法
export function getInfo(): { module: string } | null {
    // 用你自己的逻辑替换这里来获取用户信息
    // 目前，假设用户信息存储在一个名为'currentUser'的变量中
    const currentUser = {
        module: 'admin' // 替换为实际的模块值
    };

    return currentUser ? { module: currentUser.module } : null;
}