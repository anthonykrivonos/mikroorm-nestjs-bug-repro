# mikroorm-nestjs-bug-repro

`yarn install` and `yarn test`

```
 FAIL  src/access/access.spec.ts (34.034 s)
  AccessTest
    ✕ should be defined (5003 ms)

  ● AccessTest › should be defined

    thrown: "Exceeded timeout of 5000 ms for a hook.
    Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."

      23 |   let mockedOrganizationMembershipService: Mock<OrganizationMembershipService>;
      24 |
    > 25 |   beforeEach(async () => {
         |   ^
      26 |     mockedMikroORM = mock<MikroORM>('mikro orm');
      27 |     mockedAccessGrantRepository = mock<EntityRepository<AccessGrant>>('grant repository');
      28 |     mockedPermissionRepository = mock<EntityRepository<Permission>>('permission repository');

      at access/access.spec.ts:25:3
      at Object.<anonymous> (access/access.spec.ts:14:1)
```
