import type { ComponentType } from "react";
import {
  BrowserChrome,
  AuroraMock,
  MeridianMock,
  NorthlineMock,
  BasinMock,
  FernwehMock,
} from "./ProjectMocks";

const MOCKS: Record<string, ComponentType> = {
  aurora: AuroraMock,
  meridian: MeridianMock,
  northline: NorthlineMock,
  basin: BasinMock,
  fernweh: FernwehMock,
};

export default function ProjectVisual({ mockKey }: { mockKey: string }) {
  const MockComponent = MOCKS[mockKey] ?? AuroraMock;
  return (
    <>
      <BrowserChrome />
      <MockComponent />
    </>
  );
}
