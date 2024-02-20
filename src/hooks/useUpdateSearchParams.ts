import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useUpdateSearchParams = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string, append?: boolean, withCleanup?: boolean) => {
      const params = new URLSearchParams(searchParams);

      /** For some Search Params, you want to clean up all currently present other Search Params first */
      if (withCleanup) {
        for (const [key] of searchParams.entries()) {
          params.delete(key);
        }
      }

      /** Delete when filter should be applied, that is already applied (toggle filter) */
      if (params.has(name, value)) {
        params.delete(name, value);
        return params.toString();
      }

      /** You can add multiple Search Params of the same Type with `append: true`. F.e. with Multi-Filters */
      if (append) {
        params.append(name, value);
      } else {
        params.set(name, value);
      }

      return params.toString();
    },
    [searchParams],
  );

  const updateSearchParams = ({
    withName,
    withValue,
    append,
    withCleanup,
    scroll = false,
  }: {
    withName: string;
    withValue: string;
    append?: boolean;
    withCleanup?: boolean;
    scroll?: boolean;
  }) => {
    router.push(
      pathname +
        "?" +
        createQueryString(withName, withValue, append, withCleanup),
      { scroll: scroll },
    );
  };

  const deleteSearchParam = useCallback(
    (key: string) => {
      const params = new URLSearchParams(searchParams);

      if (!params.has(key)) return;

      params.delete(key);
      router.push(pathname + "?" + params.toString(), { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const toggleSearchParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams);

      if (params.has(key, value)) {
        params.delete(key, value);
      } else {
        params.set(key, value);
      }

      router.push(pathname + "?" + params.toString(), { scroll: false });
    },
    [pathname, router, searchParams],
  );

  return {
    router: router,
    pathname: pathname,
    searchParams: searchParams,
    updateSearchParams,
    deleteSearchParam,
    toggleSearchParam,
  };
};
