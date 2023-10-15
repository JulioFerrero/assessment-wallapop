import mockRouter from "next-router-mock";
jest.mock("next/router", () => jest.requireActual("next-router-mock"));
jest.mock<typeof import("next/navigation")>("next/navigation", () => {
    const actual = jest.requireActual("next/navigation");
    const nextRouterMock = jest.requireActual("next-router-mock");
    const { useRouter } = nextRouterMock;
    const usePathname = jest.fn().mockImplementation(() => {
        const router = useRouter();
        return router.asPath;
    });

    const useSearchParams = jest.fn().mockImplementation(() => {
        const router = useRouter();
        return new URLSearchParams(router.query);
    });

    return {
        ...actual,
        useRouter: jest.fn().mockImplementation(useRouter),
        usePathname,
        useSearchParams,
    };
});



export { mockRouter };
