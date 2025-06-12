// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'first-stainless-mcp-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import FirstStainlessMcp from 'first-stainless-mcp';

export const metadata: Metadata = {
  resource: 'user',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/user/login',
  operationId: 'loginUser',
};

export const tool: Tool = {
  name: 'login_user',
  description: 'Logs user into the system',
  inputSchema: {
    type: 'object',
    properties: {
      password: {
        type: 'string',
        description: 'The password for login in clear text',
      },
      username: {
        type: 'string',
        description: 'The user name for login',
      },
    },
  },
};

export const handler = async (client: FirstStainlessMcp, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.user.login(body));
};

export default { metadata, tool, handler };
