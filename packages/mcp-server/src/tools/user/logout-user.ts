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
  httpPath: '/user/logout',
  operationId: 'logoutUser',
};

export const tool: Tool = {
  name: 'logout_user',
  description: 'Logs out current logged in user session',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: FirstStainlessMcp, args: Record<string, unknown> | undefined) => {
  const response = await client.user.logout().asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
