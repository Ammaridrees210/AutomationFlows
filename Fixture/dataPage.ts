import { test as baseTest } from "@playwright/test";
import dataPage from "./data.json";

type Data = {
    data: typeof dataPage;
}

const test = baseTest.extend<Data>({
    data: dataPage
});

export default test;
