 export const useCategory = () => useState(() =>"all")
// export const useAuth = () => useState(() => ({
//     isAuthenticated: true
// }));
export const usePageStore = () => useState(() =>1)

export const useAuth = () =>
  useState(() => ({
    isAuthenticated: false,
  }));
  export const usePageVisitCount = () => useState(() => 0);